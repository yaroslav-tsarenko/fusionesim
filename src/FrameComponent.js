import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent2 ${className}`}>
      <FrameComponent1
        link="/link-3@2x.png"
        destinationsForYourNextSk="10 destinations for your next ski"
        holidayWhiteSnowLoadOfFun={`holiday – White snow & load of fun`}
        winterIsComingAndSkiLover="Winter is coming and ski lovers worldwide are jumping for joy. Skiing is more than just a sport, it’s a way of life with loads"
      />
      <div className="link-parent1">
        <img className="link-icon3" alt="" src="/link-4@2x.png" />
        <div className="heading-2-container2">
          <p className="tokyo-and-japan">Tokyo and Japan – All you need to</p>
          <p className="know-before-you">know before you hop on over to</p>
          <p className="the-cherry-blossom">the cherry blossom country</p>
        </div>
        <div className="planning-a-trip">
          Planning a trip to Tokyo? Here’s all you need toknow before you reach
          Japan’s capital.  Tokyo is the capital city of Japan and
        </div>
        <Button
          className="frame-child3"
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
      <FrameComponent1
        link="/link-5@2x.png"
        destinationsForYourNextSk="Bora Bora – our recommendation"
        holidayWhiteSnowLoadOfFun="for a sunny vacation"
        winterIsComingAndSkiLover="Bora Bora is a small island in the South Pacific, specifically in French Polynesia.  It is renowned for its breathtaking natural beauty, crystal-clear turquoise waters,"
        propWidth="290px"
        propHeight="unset"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
