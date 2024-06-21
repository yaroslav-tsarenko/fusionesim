import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "", group1000006258 }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="footer-content">
        <div className="footer-links">
          <div className="link-columns">
            <div className="link-dictionary">Dictionary</div>
            <div className="information-links">
              <div className="link-data">Data Plan</div>
              <div className="link-esim">eSIM</div>
              <div className="link-international">International Roaming</div>
              <div className="link-mobile1">Mobile Data</div>
              <div className="link-mobile2">Mobile Network</div>
            </div>
          </div>
          <div className="link-columns1">
            <div className="link-help">Help Center</div>
            <div className="link-esim-dictionary-parent">
              <div className="link-esim1">eSIM Dictionary</div>
              <div className="link-troubleshooting1">Troubleshooting</div>
              <div className="link-popular">{`Popular Q&A`}</div>
              <div className="link-manage1">Manage your eSIM</div>
              <div className="link-mobile3">Mobile Brainwash</div>
            </div>
          </div>
          <div className="link-installation-guides-parent">
            <div className="link-installation1">Installation Guides</div>
            <div className="setup-links">
              <div className="link-esim2">eSIM Compatible Devices</div>
              <div className="link-setup">setup with Fusionwavesim.app</div>
              <div className="link-setup1">setup on Samsung</div>
              <div className="link-setup2">setup on iPhone</div>
            </div>
          </div>
          <div className="articles1">
            <div className="link-articles">Articles</div>
            <div className="travel-articles">
              <div className="selecting-the-ideal-container">
                <p className="selecting-the-ideal">
                  Selecting the Ideal eSIM Plan for Your
                </p>
                <p className="travel">Travel</p>
              </div>
              <div className="discover-the-ultimate-container">
                <p className="discover-the-ultimate">
                  Discover the Ultimate Summer Travel
                </p>
                <p className="destinations-2023-for">
                  Destinations 2023 for Your Next
                </p>
                <p className="adventure">Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content1">
          <div className="brand-info">
            <img className="brand-info-child" alt="" src={group1000006258} />
            <div className="fusionwavesim5">fusionwavesim</div>
          </div>
          <div className="legal1">
            <div className="terms1">
              <h2 className="symbol2"></h2>
              <h2 className="symbol3"></h2>
            </div>
            <div className="link-terms">Terms of Use|Privacy Policy</div>
          </div>
          <div className="contact">
            <div className="link-get">Get in Touch.</div>
            <div className="infofusionwavesimapp">info@fusionwavesim.app</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  group1000006258: PropTypes.string,
};

export default Footer;
