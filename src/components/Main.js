import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <div className={`main ${className}`}>
      <header className="responsive-navbar1">
        <div className="frame-group">
          <img
            className="frame-item"
            loading="lazy"
            alt=""
            src="/group-1000006258@2x.png"
          />
          <div className="fusionwavesim3">fusionwavesim</div>
        </div>
        <div className="balance-link-parent">
          <div className="balance-link">
            <div className="esim-plans1">eSIM Plans</div>
            <div className="symbol7"></div>
          </div>
          <div className="links">
            <div className="item-link10">Check Balance</div>
          </div>
          <div className="links1">
            <div className="item-link11">Top Up</div>
          </div>
          <div className="links2">
            <div className="item-link12">Partner with us</div>
          </div>
          <div className="links3">
            <div className="item-link13">Blog</div>
          </div>
          <div className="links4">
            <div className="item-link14">Help center</div>
          </div>
          <div className="links5">
            <div className="item-link15">About Us</div>
          </div>
        </div>
        <div className="language1">
          <img
            className="language-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img
            className="language-child"
            loading="lazy"
            alt=""
            src="/group-1000006260.svg"
          />
        </div>
      </header>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
