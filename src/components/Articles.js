import { Button } from "@mui/material";
import Article from "./Article";
import Article1 from "./Article1";
import PropTypes from "prop-types";
import "./Articles.css";

const Articles = ({ className = "" }) => {
  return (
    <div className={`articles1 ${className}`}>
      <div className="article2">
        <img className="link-icon6" loading="lazy" alt="" src="/link1@2x.png" />
        <div className="article-contents">
          <div className="what-is-the-container">
            <p className="what-is-the">What is the sim form factor</p>
            <p className="and-how-is">and how is it used</p>
          </div>
          <div className="why-is-your">
            Why is your phone’s SIM card so tiny
          </div>
        </div>
        <Button
          className="article-item"
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
      <div className="article3">
        <img className="link-icon7" alt="" src="/link-11@2x.png" />
        <div className="what-is-remote-sim-provisionin-parent">
          <div className="what-is-remote-container">
            <span>
              <p className="what-is-remote">What is remote sim</p>
              <p className="provisioning-and-how">
                provisioning and how to use
              </p>
              <p className="it">it?</p>
            </span>
          </div>
          <div className="imagine-managing-hundreds-container">
            <span className="imagine-managing-hundreds-container1">
              <p className="imagine-managing-hundreds">
                Imagine managing hundreds of
              </p>
              <p className="connected-devices-spread">
                connected devices spread across
              </p>
            </span>
          </div>
          <Button
            className="frame-child5"
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
      <Article
        link="/link-21@2x.png"
        allAboutInternational="All about International"
        roamingDataPlans="roaming data plans"
        whatIsInternationalRoamin="  What is International Roaming?"
        internationalRoamingIs="International roaming is"
      />
      <Article1
        link="/link-31@2x.png"
        embarkOnAnEraOfDigital="Embark on an era of digital"
        connectionWith="connection with"
      />
      <Article1
        link="/link-41@2x.png"
        embarkOnAnEraOfDigital="Internet connectivity provided by a"
        connectionWith="mobile network, allowing"
        propWidth="226.8px"
      />
      <Article
        link="/link-51@2x.png"
        allAboutInternational="How MNO is used when it"
        roamingDataPlans="comes to eSim"
        whatIsInternationalRoamin="Like your familiar providers, Mobile"
        internationalRoamingIs="Network Operators (MNOs)"
        propWidth="230.3px"
      />
    </div>
  );
};

Articles.propTypes = {
  className: PropTypes.string,
};

export default Articles;
