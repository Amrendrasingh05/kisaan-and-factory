import BgImg from './imgFood/hero-bg.jpg'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Header from "./Foodheader.component";

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

    async function postdata(url = '', data, methods = '') {
        const response = await fetch(url, {
            method: methods,
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("auth-token")
            },
            data: data
        });
        return response.json();
    }



    const params = useParams();
    console.log(params);

    const [PrName, setPrName] = useState("")
    const [PrDesc, setPrDesc] = useState("")
    const [PrPrice, setPrPrice] = useState("")
    const [PrRating, setPrRating] = useState("")
    const [PrDiscount, setPrDiscount] = useState("")
    const [PrImage, setPrImage] = useState("")



    useEffect(() => {
        getdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/product/${params.product_id}`, 'GET')
            .then(data => {
                if (data.code == 200) {
                    console.log(data.productDetail)
                    if (data.productDetail) {
                        setPrName(data.productDetail.title);
                        setPrDesc(data.productDetail.description);
                        setPrPrice(data.productDetail.price);
                        setPrRating(data.productDetail.totalRating);
                        setPrDiscount(data.productDetail.discount);
                        setPrImage(data.productDetail.images);
                    }



                }
                else {
                    console.log("incorrect")

                }
            })
    }, "")



    const [shopName, setshopName] = useState("")
    const [OwnerName, setOwnerName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")



    useEffect(() => {
        getdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/restaurant/${params.restaurant_id}`, 'GET')
            .then(data => {
                if (data.code == 200) {
                    console.log(data, "restaurant Details")
                    if (data.restaurant) {
                        setshopName(data.restaurant.shopName);
                        setOwnerName(data.restaurant.name);
                        setEmail(data.restaurant.emailID);
                        setMobile(data.restaurant.mobile);

                    }



                }
                else {
                    console.log("incorrect")

                }
            })
    }, "")



    const [quantity, setquantity] = useState("")
    
    function addCart() {

        let data = {
                "quantity": quantity
            }
        

        console.log(data)

        postdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/cart/product/add-to-cart/${params.product_id}`, data, "POST")
            .then(data => {
                if (data.code == 200) {
                    swal(data.msg)
                }
                else {
                    swal(data.message)
                    console.log(data, "incorrect")

                }
            })
    }




    return (
        <>
            <Header />
            <div className='specificFoodBG' style={{ display: "flex", justifyContent: "space-around", paddingTop: "1%" }}>
                <div className="card specificFood">
                    <div className="card-body">
                        <div className='SpecificProductCard'>

                            <img src={"https://kisaanandfactory.com/static_file/" + PrImage} className="card-img-top" style={{ height: "300px", width: "300px", margin: "2%" }} alt="" />
                            <div>

                                <h2 className="card-title">{PrName} </h2>
                                <h5>price ₹ {PrPrice}</h5>
                                <h5 className="card-text">{PrDiscount}% discount</h5>
                                <h5 className="card-text">{PrDesc}</h5>
                                <h5>Rating {PrRating} out of 5</h5>
                            </div>
                        </div>

                        <div className='text-warning' style={{display:"flex",justifyContent:"space-between"}}> 
                        <div>Restaurant Details</div> 
                        {/* <input type="number" placeholder='Qty' onChange={(e) => setquantity(e.target.value)} /> */}
                        <button className='btn btn-warning text-white' onClick={addCart}>Add to cart</button> 
                        </div>
                        <hr />
                        
                        <div className='text-white'>Shop Name &nbsp;&nbsp;&nbsp;&nbsp; {shopName}</div>
                        <div className='text-white'>Owner Name &nbsp;&nbsp;&nbsp;{OwnerName}</div>
                        <div className='text-white'>Email Add: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Email}</div>
                        <div className='text-white'>Mobile no: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Mobile}</div>

                    </div>
                </div>

                {/* <div className='foodAdd'>
                    <input type="text" placeholder='Enter Your Name' />
                    <textarea name="" placeholder='Enter Your Address' id="" cols="30" rows="10"></textarea>
                    <input type="number" placeholder='Enter Your Mobile NO:' />
                    <select name="" id="">
                        <option value="">Payment Options</option>
                        <option value="">Cash on delivery</option>
                        <option value="">Online</option>
                    </select>

                    <button className="btn btn-success text-white foodPrimarybtn" onClick={order}>Buy Now</button>
                    <button className="btn btn-outline-primary text-primary foodPrimarybtn ">Add to Cart</button>
                    <button className="btn btn-outline-primary text-primary foodPrimarybtn ">Share</button>
                    <button className="btn btn-outline-primary text-primary foodPrimarybtn ">Like</button>
                </div> */}

            </div>
        </>
    );

};

export default Home;
