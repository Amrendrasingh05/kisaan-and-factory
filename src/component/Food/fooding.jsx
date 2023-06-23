
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import BgImg from './imgFood/hero-bg.jpg'


const Home = () => {

    function menu() {
        window.open("/Restaurants", "_self")
    }

    return (
        <MainLayout>
            <Header />

            <div className="text-white FoodHomeImg"
                style={{ backgroundImage: `url(${BgImg})`, height: "150vh", marginTop: "-30%" }}>

                <div style={{ paddingTop: "35%", paddingLeft: "5%" }}>

                    <h1 className="mb-3 h1 text-white">Kisaan& Factory Food</h1>

                    <p style={{ width: "450px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Repellendus praesentium labore accusamus sequi, voluptate
                        debitis tenetur in deleniti possimus modi voluptatum neque
                        maiores dolorem unde? Aut dolorum quod excepturi fugit.</p>
                    <button className="FoodExploreBtn" onClick={menu}>Explore</button>
                </div>

                <img className="responsiveFoodHomeImg" src={BgImg} alt="" />

            </div>
        </MainLayout >
    );

};

export default Home;
