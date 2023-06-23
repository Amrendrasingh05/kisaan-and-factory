import React, { useEffect, useState } from "react";
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import swal from "sweetalert";
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

    useEffect(() => {
        getdata("https://kisaanandfactory.com/api/v1/kisaanfood/user/order/all", 'GET')
            .then(data => {
                if (data.code == 200) {
                    if (data.orderList)
                        setProducts(data.orderList);

                } else {
                    console.log("incorrect", data)

                }
            })
            .catch(err => {
                console.log('Oh noooo!!');
                console.log(err);
            })
    }, [])


    const[cancel,setcancel]=useState("")

    function Ncards(val) {


        // console.log(val.trackingDetails.canceled)
        // if(val.trackingDetails.canceled == false)
        // {
        //     setcancel("not Canceled")
        // }
        // else{
        //     setcancel("Canceled")
        // }

        
        function menu() {
            window.open("/SpecificOrder/" + val._id, "_self")
        }



        return (

            <div>

                <div className="card mb-3 transparant">
                    <div className="FoodCartItems" onClick={menu}>
                        {/* <img src={"https://kisaanandfactory.com/static_file/" + val.item.images[0]} className="card-img" alt="" /> */}
                        <div>Order Id: {val._id}</div>
                        <div className="text-success">₹ {val.totalAmount}</div>
                        <div className="text-warning">Discount {val.discountPrice}%</div>
                        <div>{val.createdAt.slice(0, 10)}</div>
                        <div>{val.createdAt.slice(11, 19)}</div>
                        {/* <div>hi{val.trackingDetails.canceled}</div> */}
                        {/* <div>{val.trackingDetails.reject}</div> */}
                        {/* <i class="fa fa-trash text-danger" aria-hidden="true" onClick={DelBtn}></i> */}


                        {/* <div className="text-success">Price ₹ {val.item.price}</div>
                        <div className="text-warning">Discount {val.item.discount} % </div>
                        <input type="number" placeholder='Quantity' value={val.quantity} />
                        <i class="fa fa-trash text-danger" aria-hidden="true" onClick={DelBtn}></i> */}
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

                <div className="FoodCart">
                    {Products.map(Ncards)}
                </div>



            </div>
        </MainLayout >
    );

};

export default Home;
