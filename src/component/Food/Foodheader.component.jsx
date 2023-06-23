/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";

const FoodHeader = () => {
    function cart(){
        window.open("/FoodCart","_self")
    }
    return (
        <>

        <nav className="navbar navbar-dark bg-dark collapsible_Nav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-primary"></span>  &nbsp; Kisaan Food
    </button>
  </div>
</nav>
<div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
    <h5 className="text-warning h4"><a href="/fooding" className="text-warning">Home</a></h5>
    <h5 className="text-warning h4"> <a href="/Restaurants" className="text-warning"> Restaurants</a></h5>
    <h5 className="text-warning h4"><i class="fa fa-shopping-cart" aria-hidden="true" onClick={cart}></i></h5>
    <a href="/dashboard"><i class="fa fa-user text-warning" aria-hidden="true"></i></a>
    {/* <h5 className="text-warning h4"><a href="/BookTable" className="text-warning">Book Table </a></h5>
    <h5 className="text-warning h4"><a href="/FoodAbt" className="text-warning">About </a></h5> */}
    <h5><a href="/"><i class="fa fa-toggle-on" aria-hidden="true"></i> &nbsp; </a><a href="/" className=".text-info">Return To kisaan&Factory</a></h5>

  </div>
</div>

        <header className="header_section foodHeader">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container navbar-dark">
                    <a className="navbar-brand" href="/fooding">
                        <span style={{color:"#ffbe33 "}}>
                            Kisaan Food
                        </span>
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>
                    <a href="/">
                    <i class="fa fa-toggle-on" aria-hidden="true"></i>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mx-auto ">
                            <li className="nav-item">
                                <a className="nav-link" href="/fooding">Home </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Restaurants">Restaurants <span className="sr-only">(current)</span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/FoodAbt">About</a>
                            </li>
                            <li className="nav-item">
                            {/* <a className="nav-link" href="/BookTable">Book Table</a> */}
                            <a className="nav-link" href="/myOrders">My Orders</a>
                            </li>
                        </ul>

                        <div className="user_option">
                            
                            <i class="fa fa-shopping-cart" aria-hidden="true" onClick={cart}></i> &nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <a href="/dashboard"><i class="fa fa-user text-warning" aria-hidden="true"></i></a>
                            </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
    );
};

export default FoodHeader;
