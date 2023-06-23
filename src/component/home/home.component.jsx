import React, { useEffect, useState } from "react";
import "animate.css";
import Group from "../../images/Group.png";
import sero from "../../images/0.png";
import shipping from "../../images/shipping.png";
import customersupport from "../../images/customer-support.png";
import { toast } from "react-toastify";

import { Markup } from "interweave";

import Logo from "../../images/FinalLogo.png";
import Header from "../common/header.component";
import Timer from "../timmer/timmer.component";
import Footer from "../common/homefooter.component";
import { useHistory } from "react-router";
import constant from "../../constant";
import axios from "axios";
import { Link } from "react-router-dom";
import _ from "lodash";
import MainLayout from "../layouts/main-layout";

import banner1 from "./New-banner1.jpeg";
import banner5 from "./New-banner2.jpg";
import banner6 from "./New-banner3.jpg";
import banner2 from "./New-banner4.jpg";
import banner3 from "./New-banner5.jpg";
import banner4 from "./Banner 05.png";

import MiddleBanner1 from "./MiddleBanner1.jpg";
import MiddleBanner2 from "./MiddleBanner2.jpg";
import MiddleBanner3 from "./MiddleBanner3.jpg";
import joinNow from "./joinNow.png";

import Grocery from "../../images/Grocery.png";
import Dairy from "../../images/Dairy products.png";
import Accessorry from "../../images/accessories.png";
import MensFashion from "../../images/Men Fashion.png";
import WomensFashion from "../../images/Women fashions.png";
import KidsFashion from "../../images/kids.png";
import AllImg from "../../images/All.png";
import Electronics from "../../images/Electronics.png";
import Furniture from "../../images/Furniture.png";
import Healthcare from "../../images/Healthcare.png";
import vegetable_fruits from "../../images/vegetable & fruits.png";



// const a ="../../images/Testing/s3.PNG";

import Carousel from "carousel-react-rcdev";
import { display } from "@mui/system";

// // import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const slideImages = [
//   {
//     url: {a},
//     caption: 'Slide 1'
//   },
//   {
//     url: {banner2},
//     caption: 'Slide 2'
//   },
//   {
//     url: {banner3},
//     caption: 'Slide 3'
//   },
// ];

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//        {slideImages.map((slideImage, index)=> (
//           <div className="each-slide" key={index}>
//             <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//               <span>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   )
// }

const Home = () => {

  function joinNowBtn() {
    window.open("/login", "__self")
  }

  var today = new Date();
  var currtime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const history = useHistory();
  const [isLoader, setisLoader] = useState(false);
  const [AllBanner, setAllBanner] = useState([]);

  const getBanner = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/adminapp/user/banners`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          setAllBanner(values[0].data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }
  const AddToWishList = async (ProductId) => {
    let AllProduct = "";

    let token = localStorage.getItem("auth-token");
    AllProduct =
      constant.BaseUrl +
      `api/v1/userapp/dashboard/add-to-wishlist/${ProductId}`;

    const headers = {
      "auth-token": token,
      "Content-Type": "application/json",
    };
    axios
      .get(AllProduct, { headers })
      .then(function (values) { })
      .catch((err) => {
        if (err.response.status == 401) {
          toast.error("Please login to remove item from wishlist", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (err.response.status == 400) {
          toast.error("Please login to add to wishlist", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(err.response.data.msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
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
  const [FirstSlider, setFirstSlider] = useState([]);
  const [Product, setProduct] = useState([]);
  const [Product2, setProduct2] = useState([]);
  const [Product3, setProduct3] = useState([]);
  const [Product4, setProduct4] = useState([]);
  const [Product5, setProduct5] = useState([]);
  const [Product6, setProduct6] = useState([]);
  const [Product7, setProduct7] = useState([]);
  const AddToCart = async (Id, Quantity, redirect) => {
    let token = localStorage.getItem("auth-token");
    const AllProduct =
      constant.BaseUrl + `api/v1/userapp/cart/product/add-toCart/${Id}`;
    const article = { quantity: Quantity };
    const headers = {
      "auth-token": token,
      "Content-Type": "application/json",
    };
    axios
      .post(AllProduct, article, { headers })
      .then(function (values) {
        toast.success(values.data.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push(redirect);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          if (redirect) {
            toast.error("Please login to buy this item", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            history.push("/login");
            return;
          }

          toast.error("Please login to add to cart", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (err.response.status == 400) {
          if (redirect) {
            toast.error("Please login to buy this item", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            history.push("/login");
            return;
          }
          toast.error("Please login to add to cart", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          if (redirect) {
            toast.error("Please login to buy this item", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            history.push("/login");
            return;
          }
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  const BuyNow = (Id, Quantity) => {
    AddToCart(Id, Quantity, "/checkout");
  };
  const getUSers = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=622c5b490f44047c15db90d7`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RowTwo = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=61bb1ee20d810f769765eaf8`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct2(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RowThree = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=61aa5aa6da5bfc65dd874282`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct3(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };




  const RowFour = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=62a3170484b6db45f094d892`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct4(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };




  const RowFive = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=6238313f0f44047c15db921d`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct5(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const RowSix = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=611114586a8701fec2bdb80e`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct6(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };




  const RowSeven = async () => {
    let AllProduct = constant.BaseUrl + `api/v1/userapp/product/all?categoryId=6231f0fe0f44047c15db917f`;

    const promise1 = axios.get(AllProduct);

    Promise.all([promise1])
      .then(function (values) {
        if (values[0].data.code === 200) {
          let Shuffles = shuffle(values[0].data.products);

          setFirstSlider(Shuffles);
          setProduct7(shuffle(Shuffles));
          setisLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //use effect to fetch gift data
  useEffect(() => {
    getUSers();
    RowTwo();
    RowThree();
    RowFour();
    RowFive();
    RowSix();
    RowSeven();
    getBanner();
  }, []);
  if (isLoader == true) {
    return (
      <>
        <div id="loading">
          <img
            id="loading-image"
            className="animate__animated animate__zoomInDown"
            src={Logo}
            alt="Loading..."
          />
        </div>
      </>
    );
  } else {
    return (
      <MainLayout>
        <Header />

        <Carousel className="belowHeader">
          <div className="belowHeader">

            <div className="colorgray belowHeaderText" style={{marginLeft:"5%"}} onClick={() => window.open("/search","_self")}>
              <img src={AllImg} alt="" />
              All Products
            </div> 
            



            

            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "6231f0fe0f44047c15db917f","_self")}>
              <img src={vegetable_fruits} alt="" />
              vegetable & fruits
            </div>
            



            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "611114586a8701fec2bdb80e","_self")}>
              <img src={Grocery} alt="" />
              Grocery
            </div>
            



            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "622c5b490f44047c15db90d7","_self")}>
              <img src={Accessorry} alt="" />
              Electronics
            </div>
            


            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "6238313f0f44047c15db921d","_self")}>
              <img src={Electronics} alt="" />
              Kitchen Appliances
            </div>
            



            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "61bb1ee20d810f769765eaf8","_self")}>
              <img src={MensFashion} alt="" />
              Mens Fashion
            </div>
            



            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "61aa5aa6da5bfc65dd874282","_self")}>
              <img src={WomensFashion} alt="" />
              Womens Fashion
            </div>
            
          



            <div className="colorgray belowHeaderText" onClick={() => window.open("/products/" + "62a3170484b6db45f094d892","_self")}>
              <img src={KidsFashion} alt="" />
              Kids Fashion
            </div>
            

            <div className="colorgray belowHeaderText"></div>
          </div>
        </Carousel>

        <div
          className="uk-position-relative uk-visible-toggle uk-light header-bottom animate__animated animate__fadeInRight"
          tabIndex="0"
          data-uk-slider="infinite:true; center: true; autoplay:true; pause-on-hover:false;"
        >
          {/* for the sliding images of HOME PAGE HEADER */}

          <ul className="uk-slider-items myslides uk-grid uk-grid-small">
            {AllBanner.map((e, i) => {
              return (
                <>
                  <li className="uk-width-3-4@m uk-width-1-1" key={i}>
                    <div className="uk-panel">
                      <img src={banner1} alt="" />
                    </div>
                  </li>

                  <li className="uk-width-3-4@m uk-width-1-1" key={i}>
                    <div className="uk-panel">
                      <img src={banner2} alt="" />
                    </div>
                  </li>

                  <li className="uk-width-3-4@m uk-width-1-1" key={i}>
                    <div className="uk-panel">
                      <img src={banner3} alt="" />
                    </div>
                  </li>

                  <li className="uk-width-3-4@m uk-width-1-1" key={i}>
                    <div className="uk-panel">
                      {/* <img src={e.images[0]} alt={e._id} /> */}

                      <img src={banner5} alt="" />
                    </div>
                  </li>

                  <li className="uk-width-3-4@m uk-width-1-1" key={i}>
                    <div className="uk-panel">
                      {/* <img src={e.images[0]} alt={e._id} /> */}

                      <img src={banner6} alt="" />
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>


        <Timer />

        <div className="headingM animate__animated animate__bounce">
          <div
            className="heading"
            style={{ marginTop: "10%", marginLeft: "4%", color: "#6b6b6b" }}
          >
            TOP PRODUCTS
          </div>
          <div className="TopProd">
            <div className="TopProdLeft">
              <img src={banner3} alt="" />
              <img src={banner2} alt="" />
            </div>
            <div className="TopProdRight">
              <img src={MiddleBanner2} alt="" />
            </div>
          </div>
        </div>

        <section className="py-5">
          <div className="uk-container uk-container-expand">
            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              ELECTRONICS
            </h2>
            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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
            <br />

            <div className="joinBackground" style={{ backgroundImage: `url(${joinNow})` }}>

              <div>
                <p>Setup your store with</p>
                <h2>KISAAN & FACTORY</h2>
              </div>

              <button className="btn btn-info" onClick={joinNowBtn}>Join Now</button>

            </div>
            <br />
            <br />
            <br />

            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              Men's Fashion
            </h2>

            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product2.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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






            <br /><br /><br /><br /><br />

            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              Women's Fashion
            </h2>

            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product3.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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





            <br /><br /><br /><br /><br />

            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              Kids
            </h2>

            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product4.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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







            <br /><br /><br /><br /><br />

            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              KITCHEN APPLIANCES
            </h2>

            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product5.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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








            <br /><br /><br /><br /><br />

            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              GROCERY
            </h2>

            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product6.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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









            <br /><br /><br /><br /><br />

            <h2
              className="heading animate__animated animate__bounce"
              style={{ marginTop: "-7%", marginBottom: "3%", color: "#6b6b6b" }}
            >
              VEGETABLES
            </h2>

            <div
              className="uk-child-width-1-6@m uk-child-width-1-1 uk-grid-small animate__animated animate__fadeInDown animate__delay-1s ourProduct"
              data-uk-grid
            >
              {Product7.map((e, i) => {
                // e contains product, i contains index of that product
                if (i <= 11) {
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
                            <h3> {_.upperFirst(e.title)}</h3>
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



          </div>
        </section>


        <br />
        <Footer />
      </MainLayout>
    );
  }
};

export default Home;
