import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CountryCards1.css";

const CountryCards1 = ({
  className = "",
  linkFlagOfMoroccowebp,
  morocco,
  gB,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const moroccoStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const gBStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`country-cards ${className}`}>
      <div className="country-card-items">
        <div className="country-card-elements">
          <div className="wrapper-link-flag-of-morocco">
            <img
              className="link-flag-of-moroccowebp"
              loading="lazy"
              alt=""
              src={linkFlagOfMoroccowebp}
            />
          </div>
          <div className="backgroundborder">
            <b className="hot-deal">
              <p className="hot">Hot</p>
              <p className="deal">Deal</p>
            </b>
          </div>
        </div>
        <div className="country-names">
          <div className="country-name-items-parent">
            <div className="country-name-items">
              <div className="morocco" style={moroccoStyle}>
                {morocco}
              </div>
            </div>
            <div className="gb" style={gBStyle}>
              {gB}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountryCards1.propTypes = {
  className: PropTypes.string,
  linkFlagOfMoroccowebp: PropTypes.string,
  morocco: PropTypes.string,
  gB: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default CountryCards1;
