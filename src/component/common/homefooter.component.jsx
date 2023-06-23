import React from 'react';
import logo from '../../images/FinalLogo.png'
import tw4px from '../../images/Phone 24px.png'
import Location from '../../images/Location.png'

// import shipping from "../../images/shipping.png";


const HomeFooter = () => {
    return (
        <>

            <hr className='hrFooter' />

            <footer className="py-5">
                <div className="uk-container uk-container-expand">
                    <div className="myftr">

                        <div className="ftr">



                            <a className='footerLogo' href="/"><img style={{ height: "80px", marginTop: "-20px", marginBottom: "25px", marginLeft: "25px" }} alt="" src={logo} /></a>
                            <h5 style={{ color: "#007cc5" }}>Kisaan and factory</h5>
                            <div className="mlocation my-3">
                                <img alt="" src={Location} />

                                <h5 style={{ color: "#007cc5" }}>Urban estate phase 1, <br></br>
                                    Patiala Punjab, <br></br>
                                    147002 India
                                </h5>
                            </div>
                            <span className="phone-number mb-2">
                                <img alt="" src={tw4px} />
                                <p style={{ color: "#007cc5" }}><a href="tel:01755006831">01755006831</a></p>
                            </span>
                            <p style={{ color: "#007cc5" }}>
                                <a href="/">www.kisaanandfactory.com</a>
                            </p>

                        </div>

                        <div className="ftr">
                            <h6>Menu</h6>
                            <ul>
                                <li><a href="/search">Products</a></li>
                                <li><a href="/refund-policy">Refund Policy</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/payment-policy">Payment Policy</a></li>
                                <li><a href="/privacy-policy">Privacy policy</a></li>
                                <li><a href="/driver-privacy-policy">Driver Privacy policy</a></li>
                                <li><a href="/terms-and-conditions">Terms & Conditions</a></li>

                            </ul>
                        </div>
                        <div className="ftr">
                            <h6>Accounts</h6>
                            <ul>
                                <li><a href="/dashboard">My Account</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                                <li><a href="/cart">My Cart</a></li>
                                <li><a href="/wishlist">My Wishlist</a></li>
                                <li><a href="http://35.154.48.226/w-panel/" target={'_blank'} className="RegisterBtn"><span>Register as Warehouse</span> </a></li>
                                <li><a href="http://13.127.197.229/" target={'_blank'}  className="RegisterBtn"><span>Register as vendor</span></a></li>

                            </ul>
                        </div>
                        <div className="ftr">
                            <h6>Stay Connected</h6>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Twitter</a></li>
                            </ul>

                             
                        </div>
                       
                        <div className="ftr">

                        <div className="ftr">
                            <h6>Kisaan&Factory Apps</h6>
                            <ul>
                                <li><a href="https://play.google.com/store/apps/details?id=com.kissanfactory.groceryuserapplication&hl=en">User</a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=in.co.kissanvendor">Vendor</a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.aimplatfarm.aimplatfarmdelivery&hl=en">Driver</a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.kisaanandfactory.warehouseapp&hl=en">Warehouse</a></li>
                            </ul>
                            
                        </div>


                            <h6  style={{marginTop:"30%"}}>Stay Updated</h6>

                            <div className="d-flex nletter mt-3">
                                <input aria-describedby="button-addon2" aria-label="Recipient's username" className="form-control" placeholder="someone@gmail.com" required="" type="email" />

                                <button className="btn btn-primary" id="button-addon2" type="button">
                                    <i className="fa fa-paper-plane">
                                    </i>
                                </button>
                            </div>

                           

                        </div>
                    </div>
                </div>

                <hr />

                {/* <div className='footerElement'>

                   <span className="HQT">
                    <h3 className="HH1" style={{ color: "white" }}>High Quality</h3>
                    <h6 className="HH6" style={{ color: "white" }}>Harvested with Love</h6>
                   </span>

                   <span className="HQT">
                    <h3 className="HH1" style={{ color: "white" }}>Pesticide Protection</h3>
                    <h6 className="HH6" style={{ color: "white" }}>Checked Marked</h6>
                   </span>

                  
                   <span className="HQT">
                    <h3 className="HH1" style={{ color: "white" }}>Free Shipping</h3>
                    <h6 className="HH6" style={{ color: "white" }}>Order Above 150 INR</h6>
                   </span>

                   <span className="HQT">
                    <h3 className="HH1" style={{ color: "white" }}>24/7 Support</h3>
                    <h6 className="HH6" style={{ color: "white" }}>Dedicated Support</h6>
                   </span>

                </div>








 */}


            </footer>
        </>

    )
}

export default HomeFooter;