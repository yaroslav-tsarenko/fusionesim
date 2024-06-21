import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({
  className = "",
  group1000006258,
  propWidth,
  propAlignSelf,
  propWidth1,
  propOverflowX,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
      overflowX: propOverflowX,
    };
  }, [propAlignSelf, propWidth1, propOverflowX]);

  return (
    <footer className={`footer1 ${className}`}>
      <div className="frame-parent3" style={frameDiv1Style}>
        <div className="frame-parent4" style={frameDiv2Style}>
          <div className="link-dictionary-parent">
            <div className="link-dictionary1">Dictionary</div>
            <div className="link-data-plan-parent">
              <div className="link-data1">Data Plan</div>
              <div className="link-esim3">eSIM</div>
              <div className="link-international1">International Roaming</div>
              <div className="link-mobile3">Mobile Data</div>
              <div className="link-mobile4">Mobile Network</div>
            </div>
          </div>
          <div className="link-help-center-parent">
            <div className="link-help1">Help Center</div>
            <div className="link-esim-dictionary-group">
              <div className="link-esim4">eSIM Dictionary</div>
              <div className="link-troubleshooting1">Troubleshooting</div>
              <div className="link-popular1">{`Popular Q&A`}</div>
              <div className="link-manage1">Manage your eSIM</div>
              <div className="link-mobile5">Mobile Brainwash</div>
            </div>
          </div>
          <div className="link-installation-guides-parent">
            <div className="link-installation1">Installation Guides</div>
            <div className="installation-guide-links">
              <div className="link-esim5">eSIM Compatible Devices</div>
              <div className="link-setup3">setup with Fusionwavesim.app</div>
              <div className="link-setup4">setup on Samsung</div>
              <div className="link-setup5">setup on iPhone</div>
            </div>
          </div>
          <div className="link-articles-parent">
            <div className="link-articles1">Articles</div>
            <div className="travel-article-links">
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
        <div className="frame-parent5">
          <div className="frame-parent6">
            <img className="group-icon" alt="" src={group1000006258} />
            <div className="fusionwavesim3">fusionwavesim</div>
          </div>
          <div className="footer-symbols-parent">
            <div className="footer-symbols">
              <h2 className="symbol4"></h2>
              <h2 className="symbol5"></h2>
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

Footer1.propTypes = {
  className: PropTypes.string,
  group1000006258: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propOverflowX: PropTypes.any,
};

export default Footer1;
