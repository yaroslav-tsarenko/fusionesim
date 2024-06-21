import PropTypes from "prop-types";
import "./SetupInfo.css";

const SetupInfo = ({ className = "" }) => {
  return (
    <div className={`setup-info ${className}`}>
      <div className="activation">
        <h1 className="heading-23">How does eSIM for Xiaomi work?</h1>
        <div className="esim-technology-allows-container">
          <span>
            <p className="esim-technology-allows">
              eSIM technology allows Xiaomi smartphones to activate cellular
              connectivity without a physical SIM card. Instead, eSIM-capable
              Xiaomi devices like the Xiaomi 12
            </p>
            <p className="pro-and-redmi">
              Pro and Redmi Note 11 Pro 5G have an embedded SIM chip built into
              the phone. To set up an eSIM, access the eSIM menu in Settings and
              scan a QR code provided
            </p>
            <p className="by-your-carrier">
              by your carrier to download a cellular plan profile. This
              configures the eSIM to connect to the carrier’s network. eSIM uses
              the same cellular radios and antennas as
            </p>
            <p className="a-regular-sim">
              a regular SIM card. So calling, texting, and mobile data work like
              dual SIM phones. A key advantage of eSIM is the ability to quickly
              switch carrier profiles without
            </p>
            <p className="swapping-sim-cards">
              swapping SIM cards. Xiaomi Dual SIM Dual Standby phones can have
              an active eSIM profile and a nano-SIM connected simultaneously. As
              eSIM does not require a
            </p>
            <p className="removable-card-xiaomi">
              removable card, Xiaomi can make devices slimmer by removing the
              SIM card slot while retaining dual SIM capability through the
              embedded chip.
            </p>
          </span>
        </div>
      </div>
      <div className="setup-steps">
        <h1 className="heading-24">How to set up eSIM on a Xiaomi device?</h1>
        <div className="steps-list">
          <div className="item-activate-container">
            <span>
              <p className="activate-the-wifi">
                Activate the WiFi on your device and go to the settings.
              </p>
              <p className="go-to-settings">{`Go to Settings > Network`}</p>
              <p className="make-sure-the">
                Make sure the Mobile/Cellular Data option is on.
              </p>
              <p className="pick-mobilecellular-data">
                Pick mobile/cellular data.
              </p>
              <p className="on-esim-pick">
                On ‘eSIM’ pick the network you want to connect to.
              </p>
              <p className="scan-the-qr">
                Scan the QR code of the eSIM card you want to activate.Check.
              </p>
              <p className="accept-the-terms">
                Accept the terms that will appear once you are done.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="f-a-q">
        <h1 className="heading-25">eSIM Xiaomi FAQ</h1>
        <div className="f-a-q-list">
          <div className="slot-summary">
            <b className="can-i-convert">
              Can I convert the SIM to Xiaomi eSIM?
            </b>
            <div className="question-symbols">
              <h1 className="symbol8"></h1>
            </div>
          </div>
          <div className="answer">
            <div className="slot-region">
              <div className="no-converting-your">{`No, converting your physical SIM card directly into an eSIM on a Xiaomi device is impossible. eSIM relies on a different embedded chip inside the phone. However, `}</div>
              <div className="xiaomi-phones-that">{`Xiaomi phones that are eSIM-capable, like the Xiaomi 12 Pro and Mi 11 Ultra, support activating both an eSIM cellular plan profile and using a regular nano-SIM card `}</div>
              <div className="simultaneously-so-you">{`simultaneously. So you can use eSIM for one line and your current physical SIM for another. But there is no way to convert or transfer your existing SIM card’s data or `}</div>
              <div className="phone-number-to">
                phone number to be used with the eSIM functionality on a Xiaomi
                phone. You must sign up for a separate cellular plan and QR code
                to set up the eSIM.
              </div>
            </div>
            <div className="details-slot-summary">
              <div className="can-i-use">
                Can I use dual SIM and eSIM Xiaomi?
              </div>
              <div className="dual-sim-symbol">
                <h1 className="symbol9"></h1>
              </div>
            </div>
          </div>
          <div className="details-slot-summary1">
            <div className="can-i-have">
              Can I have eSIM and physical SIM at the same time?
            </div>
            <div className="symbol-wrapper1">
              <h1 className="symbol10"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SetupInfo.propTypes = {
  className: PropTypes.string,
};

export default SetupInfo;
