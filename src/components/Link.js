import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({ className = "", sVG, heading3WhatsAppSMS, propWidth }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`link ${className}`}>
      <img className="svg-icon" alt="" src={sVG} />
      <div className="heading-3-whatsappsms-wrapper" style={frameDiv3Style}>
        <div className="heading-31">{heading3WhatsAppSMS}</div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  sVG: PropTypes.string,
  heading3WhatsAppSMS: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default Link;
