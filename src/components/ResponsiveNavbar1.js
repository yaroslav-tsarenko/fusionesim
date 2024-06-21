import PropTypes from "prop-types";
import "./ResponsiveNavbar1.css";

const ResponsiveNavbar1 = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar2 ${className}`}>
      <div className="wavesim-logo">
        <img
          className="wavesim-logo-child"
          loading="lazy"
          alt=""
          src="/group-1000006258@2x.png"
        />
        <div className="fusionwavesim6">fusionwavesim</div>
      </div>
      <div className="menu">
        <div className="plans1">
          <div className="esim-plans2">eSIM Plans</div>
          <div className="symbol4"></div>
        </div>
        <div className="menu-items6">
          <div className="item-link12">Check Balance</div>
        </div>
        <div className="menu-items7">
          <div className="item-link13">Top Up</div>
        </div>
        <div className="menu-items8">
          <div className="item-link14">Partner with us</div>
        </div>
        <div className="menu-items9">
          <div className="item-link15">Blog</div>
        </div>
        <div className="menu-items10">
          <div className="item-link16">Help center</div>
        </div>
        <div className="menu-items11">
          <div className="item-link17">About Us</div>
        </div>
      </div>
      <div className="abstract-image-parent">
        <img
          className="abstract-image-icon"
          loading="lazy"
          alt=""
          src="/user-icon.svg"
        />
        <img
          className="frame-child2"
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
