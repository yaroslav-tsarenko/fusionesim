import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorder1.css";

const BackgroundBorder1 = ({
  className = "",
  image,
  gB,
  image1,
  validFor7Days,
  productPlanSpacers,
  propBackgroundColor,
  propAlignSelf,
  propDebugCommit,
  propColor,
  propColor1,
  propMinWidth,
  propDebugCommit1,
  propColor2,
  propMinWidth1,
  propColor3,
  propMinWidth2,
}) => {
  const backgroundBorderStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propAlignSelf]);

  const frameDiv4Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const dataStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const gBStyle = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth,
      debugCommit: propDebugCommit1,
    };
  }, [propColor1, propMinWidth, propDebugCommit1]);

  const validFor7Style = useMemo(() => {
    return {
      color: propColor2,
      minWidth: propMinWidth1,
    };
  }, [propColor2, propMinWidth1]);

  const productPlanSpacersStyle = useMemo(() => {
    return {
      color: propColor3,
      minWidth: propMinWidth2,
    };
  }, [propColor3, propMinWidth2]);

  return (
    <div
      className={`backgroundborder ${className}`}
      style={backgroundBorderStyle}
    >
      <div className="frame-parent8">
        <div className="frame-wrapper">
          <div className="frame-parent9" style={frameDiv4Style}>
            <div className="image-wrapper">
              <img className="image-icon" alt="" src={image} />
            </div>
            <div className="data" style={dataStyle}>
              Data
            </div>
          </div>
        </div>
        <b className="gb" style={gBStyle}>
          {gB}
        </b>
      </div>
      <div className="border">
        <div className="image-container">
          <img className="image-icon1" alt="" src={image1} />
        </div>
        <div className="valid-for-7" style={validFor7Style}>
          {validFor7Days}
        </div>
      </div>
      <div className="product-plan-spacers-wrapper">
        <b className="product-plan-spacers" style={productPlanSpacersStyle}>
          {productPlanSpacers}
        </b>
      </div>
    </div>
  );
};

BackgroundBorder1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  gB: PropTypes.string,
  image1: PropTypes.string,
  validFor7Days: PropTypes.string,
  productPlanSpacers: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propColor2: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propColor3: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default BackgroundBorder1;
