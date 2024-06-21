import PropTypes from "prop-types";
import "./ResponsiveNavbar1.css";

const ResponsiveNavbar1 = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar1 ${className}`}>
      <div className="frame-container">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/group-1000006258@2x.png"
        />
        <div className="fusionwavesim2">fusionwavesim</div>
      </div>
      <div className="frame-div">
        <div className="esim-plans-parent">
          <div className="esim-plans1">eSIM Plans</div>
          <div className="symbol3"></div>
        </div>
        <div className="item-link-check-balance-wrapper">
          <div className="item-link6">Check Balance</div>
        </div>
        <div className="item-link-check-balance-container">
          <div className="item-link7">Top Up</div>
        </div>
        <div className="item-link-check-balance-frame">
          <div className="item-link8">Partner with us</div>
        </div>
        <div className="item-link-check-balance-wrapper1">
          <div className="item-link9">Blog</div>
        </div>
        <div className="item-link-check-balance-wrapper2">
          <div className="item-link10">Help center</div>
        </div>
        <div className="item-link-check-balance-wrapper3">
          <div className="item-link11">About Us</div>
        </div>
      </div>
      <div className="vector-parent">
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/group-1000006260.svg"
        />
      </div>
    </header>
  );
};

ResponsiveNavbar1.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveNavbar1;
