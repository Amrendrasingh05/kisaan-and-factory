import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import constant from "./../constant";
import { Markup } from "interweave";
import Header from "./common/header.component";
import Footer from "./common/homefooter.component";
import { maxHeight } from "@mui/system";


function Page(){


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

    const GetPrice = (Data) => {
        if (Data.discount === 0) {
          return (
            <h6>
              Rs. {parseFloat(Data.price)} <del></del>{" "}
            </h6>
          );
        } else {
          let Price = Data.price - (Data.discount * Data.price) / 100;
          return (
            <h6>
              Rs. {parseFloat(Price).toFixed(2)} <del>{Data.price}</del>{" "}
            </h6>
          );
        }
      };



    let id = useParams()



    const [Product , setProduct] = useState([])


    useEffect(() => {
        getdata(`https://kisaanandfactory.com/api/v1/userapp/product/all?categoryId=${id.category_id}`, 'GET')
            .then(data => {
                if (data.code == 200) {
                    // console.log(data.productList)
                    if(data.products)
                    setProduct(data.products)

                }
                else {
                    console.log("incorrect")

                }
            })
    }, [])




    const[CategoryName , setCategoryName] = useState([])
    useEffect(() => {
        getdata(`https://kisaanandfactory.com/api/v1/adminapp/product/category/all`, 'GET')
            .then(data => {
                if (data.code == 200) {
                    // console.log(data.productList)
                    if(data.data)
                    // setCategoryName(data.products)
                    setCategoryName(data.data)

                }
                else {
                    console.log("incorrect")

                }
            })
    }, [])


 console.log("hi",Product)

   

    return(
        <div className="categoryPage">
        <Header />
        <div>
        {
             CategoryName.map((e,i)=> {
                if(e._id == id.category_id)
                return(
                <>
                <div className="colorgray">Result for :  {e.name} items</div>
                </>
                );
            })
        }
        </div>
       

        <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s"
              data-uk-grid
            >
              {Product.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 1000) {
                  return (
                    <div className="" key={i}>
                      <a href={`/product/` + e._id + `/` + e.categoryId}>
                        <div className="prdcts">
                          <figure>
                            <img
                              src={constant.ServerUrl + e.images[0]}
                              alt=""
                            />
                            {e.discount != 0 ? (
                              <div className="tag discount">-{e.discount}%</div>
                            ) : (
                              ""
                            )}

                          </figure>
                          <article>
                            <h3> {(e.title)}</h3>
                            <p>
                              <Markup
                                content={e.description
                                  .replace(/<\/?[^>]+(>|$)/g, "")
                                  .slice(0, 25)}
                              />
                            </p>
                            {GetPrice(e)}
                          </article>
                        </div>
                      </a>
                    </div>
                  );
                }
              })}
            </div>

            <Footer />

        </div>
    );
}
export default Page;