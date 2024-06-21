import Bestsellers from "./Bestsellers";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content2 ${className}`}>
      <Bestsellers />
      <FrameComponent1
        group1000006258="/group-1000006258-11@2x.png"
        group10000062581="/group-1000006258-21@2x.png"
        group10000062582="/group-1000006258-31@2x.png"
        propBackgroundImage="url('/howitworks02png1@3x.png')"
        propPadding="0px 0px 100px"
        propFlex="unset"
        propBackgroundImage1="url('/howitworks03png2@3x.png')"
        propHeight="473.6px"
        propPadding1="0px 0px 100px"
        propFlex1="unset"
        propBackgroundImage2="url('/howitworks03png3@3x.png')"
        propHeight1="473.6px"
        frameSectionFlex="unset"
        howItWorksStepsAlignSelf="unset"
        howItWorksStepsOverflowX="unset"
        stepItemsHeight="638.8px"
        stepItemsAlignSelf="unset"
      />
      <FrameComponent3 />
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
