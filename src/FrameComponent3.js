import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  link,
  heading2Link10RomanticGet,
  winterIsTheMostRomanticSe,
  soupsCuddlesAndMuchMoreOu,
  collectedSomeRomanticReco,
  propHeight,
  propLineHeight,
  propHeight1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const heading2Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      height: propHeight1,
    };
  }, [propLineHeight, propHeight1]);

  return (
    <div className={`link-parent ${className}`} style={frameDivStyle}>
      <img className="link-icon" loading="lazy" alt="" src={link} />
      <div className="heading-2" style={heading2Style}>
        {heading2Link10RomanticGet}
      </div>
      <div className="winter-is-the-container">
        <p className="winter-is-the">{winterIsTheMostRomanticSe}</p>
        <p className="soups-cuddles-and">{soupsCuddlesAndMuchMoreOu}</p>
        <p className="collected-some-romantic">{collectedSomeRomanticReco}</p>
      </div>
      <Button
        className="frame-button"
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

FrameComponent3.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  heading2Link10RomanticGet: PropTypes.string,
  winterIsTheMostRomanticSe: PropTypes.string,
  soupsCuddlesAndMuchMoreOu: PropTypes.string,
  collectedSomeRomanticReco: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propLineHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default FrameComponent3;
