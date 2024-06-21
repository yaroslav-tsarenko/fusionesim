import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorder.css";

const BackgroundBorder = ({
  className = "",
  image,
  minutesSeparator,
  minutesSuffixSeparator,
  propBackgroundColor,
  propColor,
  propColor1,
  propMinWidth,
  propColor2,
  propMinWidth1,
}) => {
  const backgroundBorder1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const minutesStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const minutesSeparatorStyle = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth,
    };
  }, [propColor1, propMinWidth]);

  const minutesSuffixSeparatorStyle = useMemo(() => {
    return {
      color: propColor2,
      minWidth: propMinWidth1,
    };
  }, [propColor2, propMinWidth1]);

  return (
    <div
      className={`backgroundborder1 ${className}`}
      style={backgroundBorder1Style}
    >
      <div className="horizontalborder">
        <div className="minutes-icons">
          <img className="image-icon2" alt="" src={image} />
        </div>
        <div className="minutes-amount">
          <div className="minutes-wrapper">
            <a className="minutes" style={minutesStyle}>
              Minutes
            </a>
          </div>
          <b className="minutes-separator" style={minutesSeparatorStyle}>
            {minutesSeparator}
          </b>
        </div>
      </div>
      <div className="minutes-suffix">
        <b
          className="minutes-suffix-separator"
          style={minutesSuffixSeparatorStyle}
        >
          {minutesSuffixSeparator}
        </b>
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  minutesSeparator: PropTypes.string,
  minutesSuffixSeparator: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propColor2: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default BackgroundBorder;
