import PropTypes from "prop-types";
import "./ResponsiveNavbar.css";

const ResponsiveNavbar = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar1 ${className}`}>
      <div className="logo">
        <img className="logo-child" alt="" src="/group-1000006258@2x.png" />
        <div className="fusionwavesim1">fusionwavesim</div>
      </div>
      <div className="navigation">
        <div className="plans">
          <div className="esim-plans1">eSIM Plans</div>
          <div className="symbol1"></div>
        </div>
        <div className="nav-links">
          <div className="item-link6">Check Balance</div>
        </div>
        <div className="nav-links1">
          <div className="item-link7">Top Up</div>
        </div>
        <div className="nav-links2">
          <div className="item-link8">Partner with us</div>
        </div>
        <div className="nav-links3">
          <div className="item-link9">Blog</div>
        </div>
        <div className="nav-links4">
          <div className="item-link10">Help center</div>
        </div>
        <div className="nav-links5">
          <div className="item-link11">About Us</div>
        </div>
      </div>
      <div className="user">
        <img className="user-icon" alt="" src="/user-icon.svg" />
        <img className="user-child" alt="" src="/group-1000006260.svg" />
      </div>
    </header>
  );
};

ResponsiveNavbar.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveNavbar;
