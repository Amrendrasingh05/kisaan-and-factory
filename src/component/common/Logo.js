import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/FinalLogo.png";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="" className="logo-img animate__animated animate__rubberBand animate__repeat-2 animate__delay-1s" />
    </Link>
  );
};

export default Logo;
