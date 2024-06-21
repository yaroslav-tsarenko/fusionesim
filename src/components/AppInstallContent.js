import PropTypes from "prop-types";
import "./AppInstallContent.css";

const AppInstallContent = ({ className = "" }) => {
  return (
    <div className={`app-install-content ${className}`}>
      <div className="app-description">
        <img
          className="image-22-icon"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
      </div>
      <div className="app-promo-content-wrapper">
        <div className="app-promo-content">
          <h1 className="are-you-prepared">
            Are you prepared to experience eSIMs and revolutionize your
            connectivity?
          </h1>
          <div className="install-the-fusionwavesim-container">
            <p className="install-the-fusionwavesim">
              Install the Fusionwavesim application for convenient eSIM
              purchase, management,
            </p>
            <p className="and-top-up-at">
              and top-up at your convenience and from any location!
            </p>
          </div>
        </div>
      </div>
      <img
        className="image-23-icon"
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
    </div>
  );
};

AppInstallContent.propTypes = {
  className: PropTypes.string,
};

export default AppInstallContent;
