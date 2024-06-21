import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DestinationItems.css";

const DestinationItems = ({
  className = "",
  dubaiAbuDhabiUAEFLAGwebp,
  dUBAI,
  propLineHeight,
  propMinWidth,
  propPadding,
  propWidth,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const dUBAIStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propMinWidth]);

  const destinationSeparatorStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const countrySeparatorStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const cOUNTRIES1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`destination-items ${className}`}>
      <div className="destination-rows">
        <div className="destination-details">
          <img
            className="dubai-abu-dhabi-uae-flagwebp-icon"
            loading="lazy"
            alt=""
            src={dubaiAbuDhabiUAEFLAGwebp}
          />
          <div className="destination-names">
            <div className="dubai" style={dUBAIStyle}>
              {dUBAI}
            </div>
          </div>
        </div>
        <div
          className="destination-separator"
          style={destinationSeparatorStyle}
        >
          <b className="destination-separator-values">$4.00</b>
        </div>
      </div>
      <div className="best-sellers-barjpg1" />
      <div className="destination-plan-details">
        <div className="paragraphverticalborder2">
          <div className="destination-plan-data">
            <div className="gb7">1GB</div>
          </div>
          <div className="data-plan1">DATA PLAN</div>
        </div>
        <div className="destination-plan-country">
          <div className="paragraphverticalborder3">
            <div className="destination-plan-country-value">
              <div className="days1">7 Days</div>
            </div>
            <div className="duration1">DURATION</div>
          </div>
        </div>
        <div className="destination-country-empty">
          <div className="destination-country-inner-empt">
            <div className="country-separator" style={countrySeparatorStyle}>
              6
            </div>
          </div>
          <div className="countries2" style={cOUNTRIES1Style}>
            COUNTRIES
          </div>
        </div>
      </div>
      <div className="button2">
        <img className="tag-icon2" alt="" src="/tag-icon.svg" />
        <div className="button3">GET A PLAN FOR $4.00</div>
        <img className="tag-icon3" alt="" src="/tag-icon.svg" />
      </div>
    </div>
  );
};

DestinationItems.propTypes = {
  className: PropTypes.string,
  dubaiAbuDhabiUAEFLAGwebp: PropTypes.string,
  dUBAI: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default DestinationItems;
