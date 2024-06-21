import PropTypes from "prop-types";
import "./Group1.css";

const Group1 = ({ className = "" }) => {
  return (
    <div className={`group-2-71 ${className}`}>
      <div className="ausvg-container">
        <img className="ausvg-icon4" alt="" src="/ausvg-1.svg" />
      </div>
      <div className="wrapper3">
        <div className="div6">★ ★ ★ ★ ★</div>
      </div>
      <div className="what-stands-out-container1">
        <p className="what-stands-out1">
          What stands out the most is the excellent customer support. Anytime
          I’ve had questions or needed assistance, their team has been prompt,
          friendly, and very knowledgeable. It's clear that they prioritize
          their customers’ satisfaction.
        </p>
        <p className="overall-esim-brand1">
          Overall, [eSIM Brand] has revolutionized my mobile experience, making
          it more flexible, efficient, and stress-free.
        </p>
      </div>
      <div className="cite-alex-thompson-container">
        <div className="cite-alex4">Alex Thompson</div>
      </div>
    </div>
  );
};

Group1.propTypes = {
  className: PropTypes.string,
};

export default Group1;
