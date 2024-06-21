import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  link,
  destinationsForYourNextSk,
  holidayWhiteSnowLoadOfFun,
  winterIsComingAndSkiLover,
  propWidth,
  propHeight,
}) => {
  const heading2ContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={`link-container ${className}`}>
      <img className="link-icon2" alt="" src={link} />
      <div className="heading-2-container" style={heading2ContainerStyle}>
        <span className="heading-2-container1">
          <p className="destinations-for-your">{destinationsForYourNextSk}</p>
          <p className="holiday-white">{holidayWhiteSnowLoadOfFun}</p>
        </span>
      </div>
      <div className="winter-is-coming">{winterIsComingAndSkiLover}</div>
      <Button
        className="frame-child2"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#00a11a",
          borderRadius: "8px",
          "&:hover": { background: "#00a11a" },
          width: 132,
          height: 46,
        }}
      >
        READ MORE
      </Button>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  destinationsForYourNextSk: PropTypes.string,
  holidayWhiteSnowLoadOfFun: PropTypes.string,
  winterIsComingAndSkiLover: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default FrameComponent1;
