import FormHeader from "../components/FormHeader";
import Sidebar from "../components/Sidebar";
import Footer1 from "../components/Footer1";
import "./CheckoutCartPage.css";

const CheckoutCartPage = () => {
  return (
    <div className="checkoutcartpage">
      <section className="responsive-navbar-parent">
        <header className="responsive-navbar">
          <div className="frame-parent">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/group-1000006258@2x.png"
            />
            <div className="fusionwavesim">fusionwavesim</div>
          </div>
          <div className="frame-group">
            <div className="esim-plans-parent">
              <div className="esim-plans">eSIM Plans</div>
              <div className="symbol"></div>
            </div>
            <div className="menu-items">
              <div className="item-link">Check Balance</div>
            </div>
            <div className="menu-items1">
              <div className="item-link1">Top Up</div>
            </div>
            <div className="menu-items2">
              <div className="item-link2">Partner with us</div>
            </div>
            <div className="menu-items3">
              <div className="item-link3">Blog</div>
            </div>
            <div className="menu-items4">
              <div className="item-link4">Help center</div>
            </div>
            <div className="menu-items5">
              <div className="item-link5">About Us</div>
            </div>
          </div>
          <div className="avatar-parent">
            <img
              className="avatar-icon"
              loading="lazy"
              alt=""
              src="/user-icon.svg"
            />
            <img
              className="frame-item"
              loading="lazy"
              alt=""
              src="/group-1000006260.svg"
            />
          </div>
        </header>
        <div className="checkout-banner">
          <h1 className="checkout">Checkout</h1>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
          <img
            className="frame-1000006030-1"
            alt=""
            src="/frame-1000006030-1@2x.png"
          />
          <img
            className="frame-1000006030-3"
            alt=""
            src="/frame-1000006030-3@2x.png"
          />
          <img
            className="frame-1000006030-2"
            alt=""
            src="/frame-1000006030-2@2x.png"
          />
        </div>
      </section>
      <section className="content">
        <form className="checkout-form">
          <FormHeader />
          <Sidebar />
        </form>
      </section>
      <Footer1 />
    </div>
  );
};

export default CheckoutCartPage;
