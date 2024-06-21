import FrameComponent7 from "./FrameComponent7";
import FrameComponent8 from "./FrameComponent8";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div className={`europe-plans ${className}`}>
      <FrameComponent7 />
      <FrameComponent8 />
      <FrameComponent8 propPadding="0px 0px 9.2px" />
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
