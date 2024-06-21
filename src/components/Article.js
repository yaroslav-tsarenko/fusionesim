import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Article.css";

const Article = ({
  className = "",
  link,
  allAboutInternational,
  roamingDataPlans,
  whatIsInternationalRoamin,
  internationalRoamingIs,
  propWidth,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`article ${className}`}>
      <img className="link-icon4" alt="" src={link} />
      <div
        className="all-about-international-roamin-parent"
        style={frameDiv5Style}
      >
        <div className="all-about-international-container">
          <p className="all-about-international">{allAboutInternational}</p>
          <p className="roaming-data-plans">{roamingDataPlans}</p>
        </div>
        <div className="what-is-international-container">
          <span>
            <p className="what-is-international">{whatIsInternationalRoamin}</p>
            <p className="international-roaming-is">{internationalRoamingIs}</p>
          </span>
        </div>
      </div>
      <Button
        className="article-child"
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

Article.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  allAboutInternational: PropTypes.string,
  roamingDataPlans: PropTypes.string,
  whatIsInternationalRoamin: PropTypes.string,
  internationalRoamingIs: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default Article;
