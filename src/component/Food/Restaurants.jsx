import React,{useEffect, useState} from "react";
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
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


    const [Products, setProducts] = useState([]);

    useEffect(() => {
        getdata("https://kisaanandfactory.com/api/v1/kisaanfood/user/restaurant/all", 'GET')
           .then(data => {
               if (data.code == 200) {
                   setProducts(data.restaurantList);
                   if(data.restaurantList)
                   console.log(data.restaurantList)
                                   
               } else {
                   console.log("incorrect",data)

               }
           })
           .catch(err => {
               console.log('Oh noooo!!');
               console.log(err);
             })
   }, [])

    function Ncards(val) {
        
        let prdctId =(val._id)
        // console.log (prdctId)

        function menu(){
            window.open("/menu/"+prdctId,"_self")
        }
    
        
        return (

            <div id="products_container">
               
                <div className="card mb-3 RestaurantCard" onClick={menu}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={r1} className="card-img" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{val.name}</h3>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <br />
            </div>
        );
    }

    return (
        <MainLayout>
            <Header />
            <div className="RestaurantBG" style={{ backgroundImage: `url(${BgImg})`}}>
                {Products.map(Ncards)}
                
            </div>
        </MainLayout >
    );

};

export default Home;
