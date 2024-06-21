import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BestSellerCardRows.css";

const BestSellerCardRows = ({
  className = "",
  flagOfMoroccowebp,
  mOROCCO,
  propFlex,
  propMinWidth,
  propWidth,
  propLineHeight,
  propMinWidth1,
  propDisplay,
  propWidth1,
  propPadding,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const bestSellerCardRowsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const mOROCCOStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propLineHeight, propMinWidth1, propDisplay]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding,
    };
  }, [propWidth1, propPadding]);

  const divStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const cOUNTRIESStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div
      className={`best-seller-card-rows ${className}`}
      style={bestSellerCardRowsStyle}
    >
      <div className="frame-parent2">
        <div className="flag-of-moroccowebp-parent">
          <img
            className="flag-of-moroccowebp-icon"
            alt=""
            src={flagOfMoroccowebp}
          />
          <div className="morocco-wrapper">
            <div className="morocco1" style={mOROCCOStyle}>
              {mOROCCO}
            </div>
          </div>
        </div>
        <div className="frame" style={frameDivStyle}>
          <b className="b">$4.00</b>
        </div>
      </div>
      <div className="best-sellers-barjpg" />
      <div className="frame-parent3">
        <div className="paragraphverticalborder-parent">
          <div className="paragraphverticalborder">
            <div className="gb-frame">
              <div className="gb6">1GB</div>
            </div>
            <div className="data-plan">DATA PLAN</div>
          </div>
          <div className="paragraphverticalborder1">
            <div className="best-seller-duration-details">
              <div className="days">7 Days</div>
            </div>
            <div className="duration">DURATION</div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="wrapper1">
            <div className="div3" style={divStyle}>
              6
            </div>
          </div>
          <div className="countries1" style={cOUNTRIESStyle}>
            COUNTRIES
          </div>
        </div>
      </div>
      <div className="button">
        <img className="tag-icon" alt="" src="/tag-icon.svg" />
        <div className="button1">GET A PLAN FOR $4.00</div>
        <img className="tag-icon1" alt="" src="/tag-icon.svg" />
      </div>
    </div>
  );
};

BestSellerCardRows.propTypes = {
  className: PropTypes.string,
  flagOfMoroccowebp: PropTypes.string,
  mOROCCO: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propLineHeight: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default BestSellerCardRows;
