import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ResourceIcons1.css";

const ResourceIcons1 = ({
  className = "",
  linkHepSmilelysvg,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
}) => {
  const resourceIcons1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const backgroundShadow1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const frameDiv1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  return (
    <div className={`resource-icons1 ${className}`} style={resourceIcons1Style}>
      <div className="backgroundshadow5" style={backgroundShadow1Style}>
        <img
          className="link-hep-smilelysvg"
          loading="lazy"
          alt=""
          src={linkHepSmilelysvg}
        />
      </div>
      <div className="link-popular-q-a-parent" style={frameDiv1Style}>
        <div className="link-popular1">{`Popular Q & A`}</div>
        <div className="link-someone">Someone must have asked this before</div>
      </div>
    </div>
  );
};

ResourceIcons1.propTypes = {
  className: PropTypes.string,
  linkHepSmilelysvg: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
};

export default ResourceIcons1;
