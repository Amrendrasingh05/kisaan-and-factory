
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import BgImg from './imgFood/hero-bg.jpg'

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

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


    const params = useParams();
    console.log(params.restaurant_id);

    const [Products , setProducts] = useState([])


    useEffect(() => {
        getdata(`https://kisaanandfactory.com/api/v1/kisaanfood/user/product/restaurant/${params.restaurant_id}`, 'GET')
            .then(data => {
                if (data.code == 200) {
                    console.log(data.productList)
                    if(data.productList)
                    setProducts(data.productList)

                }
                else {
                    console.log("incorrect")

                }
            })
    }, [])




    function Ncards(val) {

        let prdctId = (val._id)
        // // console.log (prdctId)

        function menu() {
            window.open("/SpecificProduct/" + params.restaurant_id +"/" +prdctId, "_self")
        }


        return (

            <div className="col-md-6 col-lg-4 col-xl-3" onClick={menu}>
                <div id="product-1" className="single-product">
                    <div className="part-1">
                        <img src={"https://kisaanandfactory.com/static_file/"+val.images} alt="" />
                        <ul>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-expand"></i></a></li>
                        </ul>
                    </div>
                    <div className="part-2">
                        <h3 className="product-title">{val.title}</h3>
                        <h4 className="product-old-price">{Math.round((val.price*100)/(100-val.discount))}</h4>
                        <h4 className="product-price">{val.price}</h4>
                    </div>
                </div>
            </div>





        );
    }


    return (
        <MainLayout>
            <Header />


            <section className="section-products">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="header">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    {Products.map(Ncards)}
                        
                    </div>
                </div>
            </section>


        </MainLayout >
    );

};

export default Home;
