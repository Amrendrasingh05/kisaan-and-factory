import React, { useEffect, useState } from "react";
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import swal from "sweetalert";
import BgImg from './imgFood/hero-bg.jpg'
import { useParams } from "react-router-dom";


const Home = () => {

    const params = useParams();


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
   
    useEffect(() => {
        getdata("https://kisaanandfactory.com/api/v1/kisaanfood/user/order/"+params.order_id, 'GET')
            .then(data => {
                if (data.code == 200) {
                    if (data.order.products)
                        setProducts(data.order.products);
                    
                } else {
                    console.log("incorrect", data)

                }
            })
            .catch(err => {
                console.log('Oh noooo!!');
                console.log(err);
            })
    }, [])
    function DelBtn() {
        let data ={
            "orderId":params.order_id
        }

            postdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/order/cancel`,data, 'POST')
                .then(data => {
                    if (data.code == 200) {
                        swal("Deleted")
                        // console.log(val.trackingDetails.reject)
                        window.open("/myOrders","_self")

                    } else {
                        console.log("incorrect")
                        swal(data.msg);

                    }
                })
        }


    function Ncards(val) {

       


        
        return (

            <div>

                <div className="card mb-3 transparant">
                    <div className="FoodCartItems">
                        <img src={"https://kisaanandfactory.com/static_file/" + val.productId.images[0]} className="card-img" alt="" />
                         <div>{val.productId.title}</div>
                        <div className="text-success">₹ {val.productId.price}</div>
                        <div className="text-warning">Discount {val.productId.discount}%</div>
                        <div>{val.productId.description}</div>
                        {/* <div>{val.createdAt.slice(0, 10)}</div>
                        <div>{val.createdAt.slice(11, 19)}</div>
                        <div>{val.trackingDetails.reject} ji</div>
                        <i class="fa fa-trash text-danger" aria-hidden="true" onClick={DelBtn}></i> 
                        <div>{val.title}</div>hi
                         <div className="text-success">Price ₹ {val.item.price}</div>
                        <div className="text-warning">Discount {val.item.discount} % </div>
                        <input type="number" placeholder='Quantity' value={val.quantity} /> */}
                    </div>


                </div>
                <hr style={{ marginLeft: "5%", marginRight: "5%" }} />


            </div>
        );
    }

     
    return (
        <MainLayout>
            <Header />
            <div className="RestaurantBG" style={{ backgroundImage: `url(${BgImg})` }}>
            <i class="fa fa-trash text-white btn btn-danger" aria-hidden="true" onClick={DelBtn}
            style={{marginTop:"5%",marginLeft:"5%",marginBottom:"-5%"}}>Cancel Order</i>

                <div className="FoodCart">
                    {Products.map(Ncards)}
                </div>



            </div>
        </MainLayout >
    );

};

export default Home;
