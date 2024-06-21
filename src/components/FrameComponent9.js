import FrameComponent7 from "./FrameComponent7";
import FrameComponent8 from "./FrameComponent8";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div className={`more-plans-row ${className}`}>
      <FrameComponent7 propPadding="9.2px 0px 0px" />
      <FrameComponent8 propPadding="9.2px 0px 0px" />
      <FrameComponent8 propPadding="9.2px 0px 0px" />
      <FrameComponent7 propPadding="9.2px 0px 0px" />
      <FrameComponent8 propPadding="9.2px 0px 0px" />
      <FrameComponent8 propPadding="9.2px 0px 0px" />
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
