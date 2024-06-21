import PropTypes from "prop-types";
import "./CountryCards.css";

const CountryCards = ({
  className = "",
  linkFlagOfNewZealandwebp,
  newZealand,
}) => {
  return (
    <div className={`country-cards1 ${className}`}>
      <div className="frame-container">
        <div className="wrapper-link-flag-of-new-zea-wrapper">
          <div className="wrapper-link-flag-of-new-zea">
            <img
              className="link-flag-of-new-zealandweb"
              loading="lazy"
              alt=""
              src={linkFlagOfNewZealandwebp}
            />
          </div>
        </div>
        <div className="new-zealand">{newZealand}</div>
        <div className="gb-wrapper">
          <div className="gb1">$4 / 1GB</div>
        </div>
      </div>
    </div>
  );
};

CountryCards.propTypes = {
  className: PropTypes.string,
  linkFlagOfNewZealandwebp: PropTypes.string,
  newZealand: PropTypes.string,
};

export default CountryCards;
