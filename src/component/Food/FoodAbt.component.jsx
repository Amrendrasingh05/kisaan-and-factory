
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import BgImg from './imgFood/client1.jpg'


const Home = () => {

    function menu() {
        window.open("/menu", "_self")
    }

    return (
        <MainLayout>
            <Header />

            <div className="text-white FoodAbt"
                style={{ backgroundColor:"black", height: "150vh", marginTop: "-30%" }}>

                <div style={{ paddingTop: "35%", paddingLeft: "5%" }}>

                    <h1 className="mb-3 h1 text-white">About Kisaan& Factory Food</h1>

                    <p style={{ width: "450px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Repellendus praesentium labore accusamus sequi, voluptate
                        debitis tenetur in deleniti possimus modi voluptatum neque
                        maiores dolorem unde? Aut dolorum quod excepturi fugit.</p>

                        <p style={{ width: "450px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Repellendus praesentium labore accusamus sequi, voluptate
                        debitis tenetur in deleniti possimus modi voluptatum neque
                        maiores dolorem unde? Aut dolorum quod excepturi fugit.</p>
                    
                </div>

                <img className="FoodAbtImg" src={BgImg} alt="" />

            </div>
        </MainLayout >
    );

};

export default Home;
