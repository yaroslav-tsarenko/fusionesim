import PropTypes from "prop-types";
import "./ResponsiveNavbar.css";

const ResponsiveNavbar = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar ${className}`}>
      <div className="frame-group">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-1000006258@2x.png"
        />
        <div className="fusionwavesim">fusionwavesim</div>
      </div>
      <div className="navigation">
        <div className="plans">
          <div className="esim-plans">eSIM Plans</div>
          <div className="symbol"></div>
        </div>
        <div className="nav-links">
          <div className="item-link">Check Balance</div>
        </div>
        <div className="nav-links1">
          <div className="item-link1">Top Up</div>
        </div>
        <div className="nav-links2">
          <div className="item-link2">Partner with us</div>
        </div>
        <div className="nav-links3">
          <div className="item-link3">Blog</div>
        </div>
        <div className="nav-links4">
          <div className="item-link4">Help center</div>
        </div>
        <div className="nav-links5">
          <div className="item-link5">About Us</div>
        </div>
      </div>
      <div className="user">
        <img
          className="user-avatar-icon"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <img
          className="user-child"
          loading="lazy"
          alt=""
          src="/group-1000006260.svg"
        />
      </div>
    </header>
  );
};

ResponsiveNavbar.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveNavbar;
