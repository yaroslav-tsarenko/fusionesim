import Link from "./Link";
import PropTypes from "prop-types";
import "./HelpCenter.css";

const HelpCenter = ({ className = "" }) => {
  return (
    <div className={`help-center ${className}`}>
      <div className="header">
        <div className="breadcrumb">
          <div className="back-link">
            <button className="section-link">
              <div className="back">BACK</div>
            </button>
          </div>
          <div className="title">
            <h1 className="heading-32">Help Center</h1>
            <div className="subtitle">
              <div className="heading-4">We're here for you</div>
            </div>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="background">
          <div className="search-description">
            <h1 className="advice-and-answers-container">
              <span className="advice-and-answers-container1">
                <p className="advice-and-answers">Advice and answers from</p>
                <p className="the-fusionwavesim-team">the Fusionwavesim Team</p>
              </span>
            </h1>
          </div>
          <div className="input">
            <input
              className="container"
              placeholder="Search for Articles"
              type="text"
            />
            <img className="input-icon" alt="" src="/input.svg" />
          </div>
        </div>
      </div>
      <div className="container1">
        <Link sVG="/svg@2x.png" heading3WhatsAppSMS="WhatsApp/SMS" />
        <Link
          sVG="/svg-1@2x.png"
          heading3WhatsAppSMS="Data Coverage issue (Location, 5G auto etc)"
          propWidth="497px"
        />
        <Link
          sVG="/svg-2@2x.png"
          heading3WhatsAppSMS="General Inquiries"
          propWidth="194px"
        />
        <Link
          sVG="/svg-3@2x.png"
          heading3WhatsAppSMS="Installation- Can't Install"
          propWidth="275px"
        />
        <Link
          sVG="/svg-4@2x.png"
          heading3WhatsAppSMS="Topup/ Check Balance"
          propWidth="257px"
        />
        <Link
          sVG="/svg-5@2x.png"
          heading3WhatsAppSMS="DATA - Phone configuration (Data Roaming/ APN/ etc)"
          propWidth="611px"
        />
        <Link
          sVG="/svg-6@2x.png"
          heading3WhatsAppSMS="VOICE - Coverage issue (Location, 5G auto etc)"
          propWidth="535px"
        />
      </div>
    </div>
  );
};

HelpCenter.propTypes = {
  className: PropTypes.string,
};

export default HelpCenter;
