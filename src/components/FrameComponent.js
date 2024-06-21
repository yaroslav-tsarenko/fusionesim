import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`help-center-title-parent ${className}`}>
      <div className="help-center-title">
        <h1 className="heading-33">Help Center</h1>
      </div>
      <div className="help-center-subtitle">
        <div className="heading-4">We're here for you</div>
      </div>
      <div className="background3">
        <div className="help-center-search-content">
          <h1 className="advice-and-answers-container">
            <span className="advice-and-answers-container1">
              <p className="advice-and-answers">Advice and answers from</p>
              <p className="the-fusionwavesim-team">the Fusionwavesim Team</p>
            </span>
          </h1>
        </div>
        <div className="input">
          <input
            className="container1"
            placeholder="Search for Articles"
            type="text"
          />
          <img className="input-icon" alt="" src="/input.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
