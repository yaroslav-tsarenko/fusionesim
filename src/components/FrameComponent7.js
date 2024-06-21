import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "", propPadding }) => {
  const europePlanDescriptionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`europe-plans-row ${className}`}>
      <div className="europe-plan-details">
        <div className="fusionwavesim-europe-data">
          Fusionwavesim Europe Data Plan
        </div>
        <div
          className="europe-plan-description"
          style={europePlanDescriptionStyle}
        >
          <b className="plan-highlight">$4.00</b>
        </div>
      </div>
      <div className="best-sellers-barjpg4" />
      <div className="europe-plan-specs">
        <div className="paragraphverticalborder8">
          <div className="europe-plan-data">
            <div className="gb10">1GB</div>
          </div>
          <div className="data-plan4">DATA PLAN</div>
        </div>
        <div className="europe-plan-countries">
          <div className="paragraphverticalborder9">
            <div className="countries-value">
              <div className="days4">7 Days</div>
            </div>
            <div className="duration4">DURATION</div>
          </div>
        </div>
        <div className="europe-countries-icon">
          <div className="countries-icon-wrapper">
            <div className="countries-icon">6</div>
          </div>
          <div className="countries5">COUNTRIES</div>
        </div>
      </div>
      <div className="button9">
        <img className="tag-icon8" alt="" src="/tag-icon.svg" />
        <div className="button10">GET A PLAN FOR $4.00</div>
        <img className="tag-icon9" alt="" src="/tag-icon.svg" />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent7;
