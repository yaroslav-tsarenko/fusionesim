import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ResourceIcons.css";

const ResourceIcons = ({
  className = "",
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
}) => {
  const resourceIconsStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const backgroundShadowStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const managementLinksStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  return (
    <div className={`resource-icons ${className}`} style={resourceIconsStyle}>
      <div className="backgroundshadow4" style={backgroundShadowStyle}>
        <img
          className="link-help-booksvg"
          loading="lazy"
          alt=""
          src="/link--helpbooksvg.svg"
        />
      </div>
      <div className="management-links" style={managementLinksStyle}>
        <div className="link-esim3">eSIM Dictionary</div>
        <div className="link-all">All you need to know about it</div>
      </div>
    </div>
  );
};

ResourceIcons.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
};

export default ResourceIcons;
