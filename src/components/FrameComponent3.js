import ResourceIcons from "./ResourceIcons";
import ResourceIcons1 from "./ResourceIcons1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`help-center-heading-wrapper ${className}`}>
      <div className="help-center-heading">
        <div className="help-categories">
          <div className="help-category">
            <div className="category-heading">
              <h1 className="heading-34">Help Center</h1>
              <div className="resource-description">
                <div className="heading-35">We're here for you</div>
              </div>
            </div>
          </div>
          <div className="management-category">
            <ResourceIcons />
            <ResourceIcons1 linkHepSmilelysvg="/link--hepsmilelysvg@2x.png" />
          </div>
        </div>
        <div className="testimonial-parent">
          <div className="testimonial1">
            <div className="testimonial-content">
              <div className="backgroundshadow6">
                <img
                  className="link-help-clogsvg1"
                  loading="lazy"
                  alt=""
                  src="/link--helpclogsvg@2x.png"
                />
              </div>
              <div className="link-troubleshooting2">Troubleshooting</div>
            </div>
            <div className="footer2">
              <div className="backgroundshadow7">
                <img
                  className="link-help-arrowsvg1"
                  loading="lazy"
                  alt=""
                  src="/link--helparrowsvg@2x.png"
                />
              </div>
              <div className="company-info">
                <div className="link-installation2">Installation guides</div>
                <div className="master-your-esim1">Master your eSIM</div>
              </div>
            </div>
          </div>
          <div className="social-links">
            <div className="legal2">
              <div className="backgroundshadow8">
                <img
                  className="link-help-switchsvg1"
                  loading="lazy"
                  alt=""
                  src="/link--helpswitchsvg@2x.png"
                />
              </div>
              <div className="article-links1">
                <div className="link-manage2">Manage your eSIM</div>
                <div className="link-be1">Be your own boss</div>
              </div>
            </div>
            <div className="social-media">
              <div className="legal-info">
                <div className="backgroundshadow9">
                  <img
                    className="link-help-brainsvg1"
                    loading="lazy"
                    alt=""
                    src="/link--helpbrainsvg@2x.png"
                  />
                </div>
                <div className="article-category">
                  <div className="link-mobile4">Mobile Brainwash</div>
                  <div className="link-learn1">
                    Learn about the mobile revolution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
