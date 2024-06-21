import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  group1000006258,
  group10000062581,
  group10000062582,
  propBackgroundImage,
  propPadding,
  propFlex,
  propBackgroundImage1,
  propHeight,
  propPadding1,
  propFlex1,
  propBackgroundImage2,
  propHeight1,
  frameSectionFlex,
  howItWorksStepsAlignSelf,
  howItWorksStepsOverflowX,
  stepItemsHeight,
  stepItemsAlignSelf,
}) => {
  const howItWorks02pngStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const stepItemsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const howItWorks03pngStyle = useMemo(() => {
    return {
      flex: propFlex,
      backgroundImage: propBackgroundImage1,
      height: propHeight,
    };
  }, [propFlex, propBackgroundImage1, propHeight]);

  const stepItems1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const howItWorks03png1Style = useMemo(() => {
    return {
      flex: propFlex1,
      backgroundImage: propBackgroundImage2,
      height: propHeight1,
    };
  }, [propFlex1, propBackgroundImage2, propHeight1]);

  const frameSectionStyle = useMemo(() => {
    return {
      flex: frameSectionFlex,
    };
  }, [frameSectionFlex]);

  const howItWorksStepsStyle = useMemo(() => {
    return {
      alignSelf: howItWorksStepsAlignSelf,
      overflowX: howItWorksStepsOverflowX,
    };
  }, [howItWorksStepsAlignSelf, howItWorksStepsOverflowX]);

  const stepItems2Style = useMemo(() => {
    return {
      height: stepItemsHeight,
      alignSelf: stepItemsAlignSelf,
    };
  }, [stepItemsHeight, stepItemsAlignSelf]);

  return (
    <section
      className={`how-it-works-steps-wrapper ${className}`}
      style={frameSectionStyle}
    >
      <div className="how-it-works-steps" style={howItWorksStepsStyle}>
        <div className="step-items" style={stepItems2Style}>
          <div className="how-it-works-02png" style={howItWorks02pngStyle}>
            <div className="frame-parent5">
              <img className="frame-inner" alt="" src={group1000006258} />
              <div className="step-icon-titles">
                <div className="fusionwavesim2">fusionwavesim</div>
              </div>
            </div>
          </div>
          <div className="step-titles">
            <h3 className="choose-your-package">Choose your package</h3>
          </div>
          <div className="step-descriptions">
            <div className="order-esim-data-container">
              <p className="order-esim-data">
                Order eSIM data plan according to your destination country. When
              </p>
              <p className="completing-the-order">
                completing the order, you will
              </p>
              <p className="receive-an-email">
                receive an email with your order
              </p>
              <p className="details">details.</p>
            </div>
          </div>
        </div>
        <div className="step-items1" style={stepItemsStyle}>
          <div className="how-it-works-03png" style={howItWorks03pngStyle}>
            <div className="frame-parent6">
              <img className="group-icon" alt="" src={group10000062581} />
              <div className="fusionwavesim-wrapper">
                <div className="fusionwavesim3">fusionwavesim</div>
              </div>
            </div>
          </div>
          <div className="get-esim-qr-code-wrapper">
            <h3 className="get-esim-qr">Get eSIM QR Code</h3>
          </div>
          <div className="open-the-file-attached-to-your-wrapper">
            <div className="open-the-file-container">
              <p className="open-the-file">{`Open the file attached to your `}</p>
              <p className="confirmation-email-where">
                confirmation email, where you can find the eSIM QR code along
                with your eSIM installation guide.
              </p>
            </div>
          </div>
        </div>
        <div className="step-items2" style={stepItems1Style}>
          <div className="how-it-works-03png1" style={howItWorks03png1Style}>
            <div className="frame-parent7">
              <img className="frame-child1" alt="" src={group10000062582} />
              <div className="fusionwavesim-container">
                <div className="fusionwavesim4">fusionwavesim</div>
              </div>
            </div>
          </div>
          <div className="scan-qr-code-wrapper">
            <h3 className="scan-qr-code">Scan QR Code</h3>
          </div>
          <div className="scan-the-qr-code-you-have-rece-wrapper">
            <div className="scan-the-qr-container">
              <p className="scan-the-qr">{`Scan the QR code you have `}</p>
              <p className="received-using-your">{`received using your eSIM `}</p>
              <p className="compatible-device-and">
                compatible device and you are good to go!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  group1000006258: PropTypes.string,
  group10000062581: PropTypes.string,
  group10000062582: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding1: PropTypes.any,
  propFlex1: PropTypes.any,
  propBackgroundImage2: PropTypes.any,
  propHeight1: PropTypes.any,
  frameSectionFlex: PropTypes.any,
  howItWorksStepsAlignSelf: PropTypes.any,
  howItWorksStepsOverflowX: PropTypes.any,
  stepItemsHeight: PropTypes.any,
  stepItemsAlignSelf: PropTypes.any,
};

export default FrameComponent1;
