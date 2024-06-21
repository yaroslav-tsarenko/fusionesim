import { Button } from "@mui/material";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-parent1 ${className}`}>
      <FrameComponent3
        link="/link@2x.png"
        heading2Link10RomanticGet="10 Romantic Getaways Ideas"
        winterIsTheMostRomanticSe="Winter is the most romantic season – tea,"
        soupsCuddlesAndMuchMoreOu="soups, cuddles, and much more. Our team"
        collectedSomeRomanticReco="collected some romantic recommendations forthe winter of 2023/2024."
      />
      <div className="link-group">
        <img className="link-icon1" alt="" src="/link-1@2x.png" />
        <div className="heading-21">
          Best eSIM for China: Which Plan is the Best for You?
        </div>
        <div className="esim-technology-has-container">
          <p className="esim-technology-has">
            eSIM technology has revolutionized
          </p>
          <p className="connectivity-for-travelers">
            connectivity for travelers by providing an
          </p>
          <p className="embedded-digital-sim">
            embedded digital SIM card directly
          </p>
          <p className="incompatible-devices-as">
            incompatible devices. As eSIMs grow in
          </p>
          <p className="popularity-they-have">popularity, they have become</p>
        </div>
        <Button
          className="frame-child1"
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
      <FrameComponent3
        link="/link-2@2x.png"
        heading2Link10RomanticGet="Costa Rica – Time for Some Central American Adventures!"
        winterIsTheMostRomanticSe="Costa Rica is located in Central America,"
        soupsCuddlesAndMuchMoreOu="bordered by Nicaragua to the north and"
        collectedSomeRomanticReco="Panama to the south. The following are someinteresting facts about"
        propHeight="548.7px"
        propLineHeight="120%"
        propHeight1="66px"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
