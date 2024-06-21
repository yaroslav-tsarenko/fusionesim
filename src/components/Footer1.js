import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer4 ${className}`}>
      <div className="footer-content2">
        <div className="frame-parent15">
          <div className="link-dictionary-group">
            <div className="link-dictionary2">Dictionary</div>
            <div className="link-data-plan-group">
              <div className="link-data2">Data Plan</div>
              <div className="link-esim7">eSIM</div>
              <div className="link-international2">International Roaming</div>
              <div className="link-mobile8">Mobile Data</div>
              <div className="link-mobile9">Mobile Network</div>
            </div>
          </div>
          <div className="link-help-center-group">
            <div className="link-help2">Help Center</div>
            <div className="link-esim-dictionary-container">
              <div className="link-esim8">eSIM Dictionary</div>
              <div className="link-troubleshooting4">Troubleshooting</div>
              <div className="link-popular3">{`Popular Q&A`}</div>
              <div className="link-manage4">Manage your eSIM</div>
              <div className="link-mobile10">Mobile Brainwash</div>
            </div>
          </div>
          <div className="guide-links">
            <div className="link-installation4">Installation Guides</div>
            <div className="guide-items">
              <div className="link-esim9">eSIM Compatible Devices</div>
              <div className="link-setup6">setup with Fusionwavesim.app</div>
              <div className="link-setup7">setup on Samsung</div>
              <div className="link-setup8">setup on iPhone</div>
            </div>
          </div>
          <div className="article-links2">
            <div className="link-articles2">Articles</div>
            <div className="article-items">
              <div className="selecting-the-ideal-container2">
                <p className="selecting-the-ideal2">
                  Selecting the Ideal eSIM Plan for Your
                </p>
                <p className="travel3">Travel</p>
              </div>
              <div className="discover-the-ultimate-container2">
                <p className="discover-the-ultimate2">
                  Discover the Ultimate Summer Travel
                </p>
                <p className="destinations-2023-for2">
                  Destinations 2023 for Your Next
                </p>
                <p className="adventure2">Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-logo">
            <img
              className="footer-logo-child"
              alt=""
              src="/group-1000006258-41@2x.png"
            />
            <div className="fusionwavesim8">fusionwavesim</div>
          </div>
          <div className="footer-contact">
            <div className="footer-icons">
              <h2 className="symbol7"></h2>
              <h2 className="symbol8"></h2>
            </div>
            <div className="link-terms2">Terms of Use|Privacy Policy</div>
          </div>
          <div className="info-links">
            <div className="link-get2">Get in Touch.</div>
            <div className="infofusionwavesimapp2">info@fusionwavesim.app</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
