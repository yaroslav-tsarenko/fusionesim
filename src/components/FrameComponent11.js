import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section className={`how-it-works ${className}`}>
      <FrameComponent1
        group1000006258="/group-1000006258-12@2x.png"
        group10000062581="/group-1000006258-22@2x.png"
        group10000062582="/group-1000006258-32@2x.png"
        propBackgroundImage="url('/howitworks02png2@3x.png')"
        propPadding="0px 0px 100px"
        propFlex="unset"
        propBackgroundImage1="url('/howitworks03png4@3x.png')"
        propHeight="473.6px"
        propPadding1="0px 0px 100px"
        propFlex1="unset"
        propBackgroundImage2="url('/howitworks03png5@3x.png')"
        propHeight1="473.6px"
        frameSectionFlex="1"
        howItWorksStepsAlignSelf="stretch"
        howItWorksStepsOverflowX="auto"
        stepItemsHeight="unset"
        stepItemsAlignSelf="stretch"
      />
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
