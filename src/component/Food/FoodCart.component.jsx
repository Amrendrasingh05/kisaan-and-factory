import React, { useEffect, useState } from "react";
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import swal from "sweetalert";
import r1 from './imgFood/WhatsApp Image 2022-09-16 at 2.22.15 PM.jpeg'
import r2 from './imgFood/WhatsApp Image 2022-09-16 at 2.23.02 PM.jpeg'
import r3 from './imgFood/WhatsApp Image 2022-09-16 at 2.23.27 PM.jpeg'
import r4 from './imgFood/WhatsApp Image 2022-09-16 at 2.24.08 PM.jpeg'
import r5 from './imgFood/WhatsApp Image 2022-09-16 at 2.24.46 PM.jpeg'
import r6 from './imgFood/WhatsApp Image 2022-09-16 at 2.25.17 PM.jpeg'
import BgImg from './imgFood/hero-bg.jpg'



const Home = () => {


    async function getdata(url = '', methods = '') {
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("auth-token")
            },
        });
        return response.json();
    }



    async function postdata(url = '', data = {}, methods = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify(data)
        });
        console.log(JSON.stringify(data))
        return await response.json();
    }


    const [Products, setProducts] = useState([]);
    const [Subtotal, setSubtotal] = useState([]);
    const [TotDiscount, setTotDiscount] = useState([]);
    const [CartId, setCartId] = useState([]);
    const [Seller, setSeller] = useState([]);
    

    useEffect(() => {
        getdata("https://kisaanandfactory.com/api/v1/kisaanfood/user/cart/view", 'GET')
            .then(data => {
                if (data.code == 200) {
                    if (data.cartItems.cart)
                        setProducts(data.cartItems.cart);
                        setSeller(data.cartItems.cart[0].item.soldBy);
                        setCartId(data.cartItems._id);
                        setSubtotal(data.subTotal);
                        setTotDiscount(data.totalDiscount)
                    console.log(data.cartItems.cart[0].item.soldBy)

                } else {
                    console.log("incorrect", data)

                }
            })
            .catch(err => {
                console.log('Oh noooo!!');
                console.log(err);
            })
    }, [])


    const[houseNo , setHouseNo]=useState("");
    const[Street , setStreet]=useState("");
    const[City , setCity]=useState("");
    const[Pin , setPin]=useState("");
    const[Country , setCountry]=useState("");
    const[Loaclity , setLoaclity]=useState("");
    const[State , setState]=useState("");

    useEffect(() => {
        getdata("https://kisaanandfactory.com/api/v1/userapp/dashboard/address/all", 'GET')
            .then(data => {
                if (data.code == 200) {
                    
                    setHouseNo(data.address[0].house);
                    setStreet(data.address[0].street);
                    setCity(data.address[0].city);
                    setPin(data.address[0].zip);
                    setCountry(data.address[0].country);
                    setLoaclity(data.address[0].locality);
                    setState(data.address[0].state);
                    
                } else {
                    console.log("incorrect", data)

                }
            })
            .catch(err => {
                console.log('Oh noooo!!');
                console.log(err);
            })
    }, [])


    let productsArray = []


    function Ncards(val) {

        let data = {}

        productsArray.push({"product":"6343bf30416e702e8aaf7472","productQuantity":val.quantity,
        "productId":val.item._id})
        // console.log(val.quantity);
        // console.log(val.item._id);
        function DelBtn() {
            getdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/cart/product/remove/${val.item._id}`, 'POST')
                .then(data => {
                    if (data.code == 200) {
                        swal("Deleted")
                        window.open("FoodCart","_self")

                    } else {
                        console.log("incorrect")
                        swal(data.msg);

                    }
                })
        }


        
        return (

            <div>

                <div className="card mb-3 transparant">
                    <div className="FoodCartItems">
                        <img src={"https://kisaanandfactory.com/static_file/" + val.item.images[0]} className="card-img" alt="" />
                        <div>{val.item.title}</div>
                        <div className="text-success">Price ₹ {val.item.price}</div>
                        <div className="text-warning">Discount {val.item.discount} % </div>
                        <input type="number" placeholder='Quantity' value={val.quantity} />
                        <i class="fa fa-trash text-danger" aria-hidden="true" onClick={DelBtn}></i>
                    </div>


                </div>
                <hr style={{ marginLeft: "5%", marginRight: "5%" }} />


            </div>
        );
    }

    console.log(productsArray)

    function ClearCart(){
        getdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/cart/product/remove`, 'DELETE')
                .then(data => {
                    if (data.code == 200) {
                        swal("Your Cart is Cleared")

                    } else {
                        console.log("incorrect")
                        swal(data.msg);

                    }
                })
    }

    
    function ProceedBtn(){
        console.log(Seller)

        let data = {
            "cartId":CartId,
            "products":productsArray,
            "orderImg":"www.o.com",
            "discountPrice":TotDiscount,
            "deliveryCharge":10,
            "totalAmount":Subtotal,
            "paymentMethod":"COD",
            "paymentStatus":"unpaid",
            "orderStatus":"confirmed",
            "seller":Seller,
            "shippingName":"Demo name",
            "shippindAddressID":"612c923bc0b53f6583cead53",
            "shippingContact":9054225896
        }

        console.log(data)

        postdata("https://kisaanandfactory.com/api/v1/kisaanfood/user/order/create", data,'POST')
        .then(data => {
            if (data.code == 200) {
                swal("Your Order Has been Created","Success")
            } else {
                console.log("incorrect", data)

            }
        })
    }

    function AddAddress(){
        let data = {
            "cartId":"6307afb0e061afad992ff54e",
            "products":[
                {
                    "product":"6343bf30416e702e8aaf7472",
                    "productQuantity":1,
                    "productId":"6343bf30416e702e8aaf7472"
                }
            ],
            "orderImg":"www.o.com",
            "discountPrice":TotDiscount,
            "deliveryCharge":10,
            "totalAmount":Subtotal,
            "paymentMethod":"COD",
            "paymentStatus":"unpaid",
            "orderStatus":"confirmed",
            "seller":"633fd862ce59651c7e617d16",
            "shippingName":"Demo name",
            "shippindAddressID":"612c923bc0b53f6583cead53",
            "shippingContact":9054225896
        }

        postdata("https://kisaanandfactory.com/api/v1/kisaanfood/user/order/create", data,'POST')
        .then(data => {
            if (data.code == 200) {
                swal("Your Order Has been Created","Success")
            } else {
                console.log("incorrect", data)

            }
        })
    }

    return (
        <MainLayout>
            <Header />
            <div className="RestaurantBG" style={{ backgroundImage: `url(${BgImg})` }}>
                <button className="btn btn-danger" onClick={ClearCart}
                style={{ marginTop: "5%", marginBottom: "-5%", marginLeft: "5%" }}>
                    Clear Cart &nbsp;
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
                <div className="FoodCart">
                    {Products.map(Ncards)}
                </div>


                <div className="FoodAdd_Bill">
                    <div className="FoodCartAdd">
                    <input type="text" value={houseNo} placeholder="House/Flat No:"/>
                    <input type="text" value={Street} placeholder="Street"/>
                    <input type="text" value={Loaclity} placeholder="Locality"/>
                    <input type="text" value={City} placeholder="City"/>
                    <input type="text" value={State} placeholder="State"/>     
                    <input type="number" value={Pin} name="" id="" placeholder="Pin Code"/>
                    <input type="text" value={Country} placeholder="Country"/>     
                    <button className="btn btn-outline-warning">Add Adress</button>
                    </div>

                    <div className="FoodCartBill">

                        <h2>Order Summary</h2> 
                        <div>Sub Total (+GST) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹ {Subtotal}</div>
                        <div>Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {TotDiscount} %</div>
                        <div>Coupon Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹ 0</div>
                        <div>Shipping Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹ 0</div>
                        <div>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹ {Subtotal}</div>
                        <button className="btn btn-outline-info"onClick={ProceedBtn} >Proceed</button>
                        

                    </div>
                </div>


            </div>
        </MainLayout >
    );

};

export default Home;
