import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "", propPadding }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`europe-plans-row1 ${className}`}>
      <div className="fusionwavesim-europe-data-plan-parent">
        <div className="fusionwavesim-europe-data1">
          Fusionwavesim Europe Data Plan
        </div>
        <div className="wrapper4" style={frameDiv2Style}>
          <b className="b2">$4.00</b>
        </div>
      </div>
      <div className="best-sellers-barjpg5" />
      <div className="frame-parent8">
        <div className="paragraphverticalborder-group">
          <div className="paragraphverticalborder10">
            <div className="gb-wrapper1">
              <div className="gb11">1GB</div>
            </div>
            <div className="data-plan5">DATA PLAN</div>
          </div>
          <div className="paragraphverticalborder11">
            <div className="europe-plan-duration-amount">
              <div className="days5">7 Days</div>
            </div>
            <div className="duration5">DURATION</div>
          </div>
        </div>
        <div className="frame-parent9">
          <div className="wrapper5">
            <div className="div8">6</div>
          </div>
          <div className="countries6">COUNTRIES</div>
        </div>
      </div>
      <div className="button11">
        <img className="tag-icon10" alt="" src="/tag-icon.svg" />
        <div className="button12">GET A PLAN FOR $4.00</div>
        <img className="tag-icon11" alt="" src="/tag-icon.svg" />
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent8;
