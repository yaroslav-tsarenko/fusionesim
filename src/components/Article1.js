import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Article1.css";

const Article1 = ({
  className = "",
  link,
  embarkOnAnEraOfDigital,
  connectionWith,
  propWidth,
}) => {
  const embarkOnAnContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`article1 ${className}`}>
      <img className="link-icon5" alt="" src={link} />
      <div className="a-guide-to-mobile-data-and-esi-parent">
        <div className="a-guide-to-container">
          <p className="a-guide-to">A Guide to Mobile Data and</p>
          <p className="esim-for-improved">eSIM for Improved</p>
          <p className="connectivity">Connectivity</p>
        </div>
        <div
          className="embark-on-an-container"
          style={embarkOnAnContainerStyle}
        >
          <span className="embark-on-an-container1">
            <p className="embark-on-an">{embarkOnAnEraOfDigital}</p>
            <p className="connection-with">{connectionWith}</p>
          </span>
        </div>
        <Button
          className="frame-child4"
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
    </div>
  );
};

Article1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  embarkOnAnEraOfDigital: PropTypes.string,
  connectionWith: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default Article1;
