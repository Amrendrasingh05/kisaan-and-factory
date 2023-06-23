import "./css/bootstrap.min.css";
import "./css/bootstrap.rtl.min.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-grid.rtl.min.css";
import "./css/bootstrap-reboot.min.css";
import "./css/bootstrap-reboot.rtl.min.css";
import "./css/bootstrap-utilities.min.css";
import "./css/bootstrap-utilities.rtl.min.css";
import "./css/Font.css";
import "./css/uikit-rtl.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./css/uikit.min.css";

import "./App.css";
import "./Custom.css";

import "../node_modules/uikit/dist/js/uikit.js";
import "../node_modules/uikit/dist/js/uikit-icons.js";
import "uikit/dist/css/uikit.min.css";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./component/Protected";
//auth
import Home from "./component/home/home.component";
import Login from "./component/Auth/login.component";
import Search from "./component/search/search.component";
import Dashboard from "./component/dashboard/dashboard.component";
import WishList from "./component/dashboard/wishlist.component";
import Cart from "./component/cart/cart.component";
import Checkout from "./component/cart/checkout.component";

import Suucess from "./component/cart/success.component";
import DetailsPAge from "./component/home/productPage.component";

import About from "./component/static/about.component";
import Payment from "./component/static/payment.component";
import terms from "./component/static/terms.component";
import termsc from "./component/static/termsc.component";

import Refundpolicy from "./component/static/refund.component";
import DriverPrivacyPolicy from "./component/static/driver.privacy";

import resetPassword from "./component/Auth/resetpassword";

import ChatBoard from "./component/static/chat";
import Notfound from "./component/NotFound";
import CategoryPage from './component/CategoryPage.component'

import Apps from "./component/Apps/Apps";
import fooding from "./component/Food/fooding";
import menu from "./component/Food/Menu.component";
import BookTable from "./component/Food/Booktable.component"
import FoodAbt from "./component/Food/FoodAbt.component"
import Restaurants from "./component/Food/Restaurants"
import SpecificProduct from "./component/Food/SpecificProduct.component"
import FoodCart from "./component/Food/FoodCart.component"
import myOrders from "./component/Food/myorders.component"
import specificOrder from "./component/Food/specificOrder.component"
function Logout() {
  localStorage.clear();
  return <Redirect to="/" />;
}
function App() {
  UIkit.use(Icons);

  return (
    <Router>
      <Switch>
        <Route exact path="/chat-board" component={ChatBoard} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/product/:id/:category_id" component={DetailsPAge} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/payment-policy" component={Payment} />
        <Route exact path="/privacy-policy" component={terms} />
        <Route exact path="/fooding" component={fooding} />
        <Route exact path="/menu/:restaurant_id" component={menu} />
        <Route exact path="/SpecificProduct/:restaurant_id/:product_id" component={SpecificProduct} />
        <Route exact path="/BookTable" component={BookTable} />
        <Route exact path="/FoodAbt" component={FoodAbt} />
        <Route exact path="/Restaurants" component={Restaurants} />
        <Route exact path="/FoodCart" component={FoodCart} />
        <Route exact path="/myOrders" component={myOrders} />
        <Route exact path="/SpecificOrder/:order_id" component={specificOrder} />
        <Route exact path="/products/:category_id" component={CategoryPage} />

        <Route
          exact
          path="/driver-privacy-policy"
          component={DriverPrivacyPolicy}
        />

        <Route exact path="/terms-and-conditions" component={termsc} />
        <Route exact path="/refund-policy" component={Refundpolicy} />
        <Route exact path="/reset-password" component={resetPassword} />

        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/wishlist" component={WishList} />

        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/checkout" component={Checkout} />
        <ProtectedRoute path="/success" component={Suucess} />

        <Route exact path="/logout" component={Logout} />
        <Route exact path="/Apps" component={Apps} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
