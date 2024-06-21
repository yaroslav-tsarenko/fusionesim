import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer3 ${className}`}>
      <div className="frame-parent10">
        <div className="frame-parent11">
          <div className="link-dictionary-parent">
            <div className="link-dictionary1">Dictionary</div>
            <div className="link-data-plan-parent">
              <div className="link-data1">Data Plan</div>
              <div className="link-esim4">eSIM</div>
              <div className="link-international1">International Roaming</div>
              <div className="link-mobile5">Mobile Data</div>
              <div className="link-mobile6">Mobile Network</div>
            </div>
          </div>
          <div className="link-help-center-parent">
            <div className="link-help1">Help Center</div>
            <div className="link-esim-dictionary-group">
              <div className="link-esim5">eSIM Dictionary</div>
              <div className="link-troubleshooting3">Troubleshooting</div>
              <div className="link-popular2">{`Popular Q&A`}</div>
              <div className="link-manage3">Manage your eSIM</div>
              <div className="link-mobile7">Mobile Brainwash</div>
            </div>
          </div>
          <div className="link-installation-guides-group">
            <div className="link-installation3">Installation Guides</div>
            <div className="link-esim-compatible-devices-parent">
              <div className="link-esim6">eSIM Compatible Devices</div>
              <div className="link-setup3">setup with Fusionwavesim.app</div>
              <div className="link-setup4">setup on Samsung</div>
              <div className="link-setup5">setup on iPhone</div>
            </div>
          </div>
          <div className="link-articles-parent">
            <div className="link-articles1">Articles</div>
            <div className="selecting-the-ideal-esim-plan-parent">
              <div className="selecting-the-ideal-container1">
                <p className="selecting-the-ideal1">
                  Selecting the Ideal eSIM Plan for Your
                </p>
                <p className="travel1">Travel</p>
              </div>
              <div className="discover-the-ultimate-container1">
                <p className="discover-the-ultimate1">
                  Discover the Ultimate Summer Travel
                </p>
                <p className="destinations-2023-for1">
                  Destinations 2023 for Your Next
                </p>
                <p className="adventure1">Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent12">
          <div className="frame-parent13">
            <img
              className="frame-child3"
              alt=""
              src="/group-1000006258-42@2x.png"
            />
            <div className="fusionwavesim7">fusionwavesim</div>
          </div>
          <div className="frame-parent14">
            <div className="symbol-parent">
              <h2 className="symbol5"></h2>
              <h2 className="symbol6"></h2>
            </div>
            <div className="link-terms1">Terms of Use|Privacy Policy</div>
          </div>
          <div className="link-get-in-touch-parent">
            <div className="link-get1">Get in Touch.</div>
            <div className="infofusionwavesimapp1">info@fusionwavesim.app</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
