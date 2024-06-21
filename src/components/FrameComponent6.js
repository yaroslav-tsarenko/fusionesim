import ResponsiveNavbar from "./ResponsiveNavbar";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`responsive-navbar-group ${className}`}>
      <ResponsiveNavbar />
      <div className="your-cart-parent">
        <h1 className="your-cart">Your Cart</h1>
        <div className="view-or-edit1">
          View or edit your cart before checkout
        </div>
        <img
          className="frame-1000006030-11"
          alt=""
          src="/frame-1000006030-1@2x.png"
        />
        <img
          className="frame-1000006030-31"
          alt=""
          src="/frame-1000006030-3@2x.png"
        />
        <img
          className="frame-1000006030-21"
          alt=""
          src="/frame-1000006030-2@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
