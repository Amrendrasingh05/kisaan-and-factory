
import Header from "./Foodheader.component";
import MainLayout from "../layouts/main-layout";
import BgImg from './imgFood/hero-bg.jpg'


const Home = () => {

    function menu() {
        window.open("/menu", "_self")
    }

    return (
        <MainLayout>
            <Header />

            <section className="book_section">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Book A Table
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <form action="">
                                    <input type="text" className="form-control " placeholder="Your Name"  style={{marginTop:"5%"}}/>
                                    <input type="number" className="form-control" placeholder="Phone Number"  style={{marginTop:"5%"}}/>
                                    <input type="email" className="form-control" placeholder="Your Email"  style={{marginTop:"5%"}}/>
                                    <select className="form-control nice-select wide" style={{marginTop:"5%"}}>
                                        <option value="" >
                                            How many persons?
                                        </option>
                                        <option value="">
                                            2
                                        </option>
                                        <option value="">
                                            3
                                        </option>
                                        <option value="">
                                            4
                                        </option>
                                        <option value="">
                                            5
                                        </option>
                                    </select>

                                    <input type="date" className="form-control" placeholder="dd-mm-yy"  style={{marginTop:"5%"}}/>

                                    
                                        <button className="BookTableBtn">
                                            Book Now
                                        </button>
                                    
                                </form>
                            </div>
                        </div>

                       
                    </div>
                </div>

                <div id="map-container-google-1" className="z-depth-1-half map-container BookTableMap" >
  <iframe className="BookTableMap" src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
</div>


            </section>
        </MainLayout >
    );

};

export default Home;
