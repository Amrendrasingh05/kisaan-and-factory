import React, { useEffect, useState } from "react";
import './timmer.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Vimg1 from "./pumpkin-isolated_55883-7720.jpg";
import Vimg2 from "./fresh-cauliflower_1339-357.jpg";
import Vimg3 from "./bell-pepper_1339-1599.jpg";
import Vimg4 from "./delicious-potatoes-white-background_1203-1899.jpg";
import Vimg5 from "./okra-ladys-finger-bhindi-fresh-green-vegetable-arranged-basket-with-wooden-textured-backgroundisolated-selective-focus_527904-3157.jpg";

import Fimg1 from "./apples.jpg";
import Fimg2 from "./grapes.jpg";
import Fimg3 from "./green-grape.jpg";
import Fimg4 from "./lychee.jpg";
import Fimg5 from "./pomegranate.jpg";

import sunRise from "./sunrise.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const Timer = () => {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(5);

    var timer;
    useEffect(() => {

        timer = setInterval(() => {

            setSecond(second - 1);
            if (second == 0) {
                setMinute(minute - 1);
                setSecond(second + 59);
            }

            if (minute == 0) {
                setHour(hour - 1);
                setMinute(59);
            }
            // setSecond(second-1);




        }, 1000)

        return () => clearInterval(timer)
    })

    var today = new Date();
    var currtime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(today.getHours() >= 7 && today.getHours() <= 24)
    {
      return (

        <div >
            <div className="heading" id="blinkText" style={{ marginTop: "5%", marginLeft: "4%", color: "#6b6b6b" }}>Morning Essentials</div>
            <div className="timmer">
                <h3></h3>
                <img src={sunRise} alt="" />
                <h1>

                    Ends in (  {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second + ")"} </h1>
                <h5></h5>
            </div>

            <div className="Time">


                <div className="VegeiFruit">

                    <AwesomeSlider className="awseomeSlider">
                        {/* <div><img src={Vimg1} alt="" /></div> */}
                        <div><img src={Vimg2} alt="" useMap="#vege" /></div>
                        <div><img src={Vimg3} alt="" useMap="#vege" /></div>
                        <div><img src={Vimg4} alt="" useMap="#vege" /></div>
                        <div><img src={Vimg5} alt="" useMap="#vege" /></div>

                    </AwesomeSlider>
                   <a href="/search?search=vegetable">
                    <div className="Vegetable_text">Vegetables</div>
                    </a> 

                    <map name="vege">
                        <area shape="rect" coords="60,20,313,236" href="/search?search=vegetable" alt="" />
                    </map>

                </div>


                <div className="VegeiFruit_fruit">

                    <AwesomeSlider className="awseomeSlider">
                        <div><img src={Fimg1} alt="" useMap="#fruits" /></div>
                        <div><img src={Fimg2} alt="" useMap="#fruits" /></div>
                        <div><img src={Fimg4} alt="" useMap="#fruits" /></div>
                        <div><img src={Fimg5} alt="" useMap="#fruits" /></div>

                    </AwesomeSlider>
                    <a href="/search?search=fruit">
                    <div className="Fruit_text">Fruits</div>
                    </a> 


                    <map name="fruits">
                        <area shape="rect" coords="60,20,313,236" href="/search?search=fruit" alt="" />
                    </map>
                </div>

            </div>
        </div>
    )
}
else
return(<div style={{marginBottom:"-8%"}}></div>);
}

export default Timer;