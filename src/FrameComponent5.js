import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`productpage-child ${className}`}>
      <div className="frame-parent7">
        <div className="productusa-wrapper">
          <h1 className="productusa">product/usa</h1>
        </div>
        <TextField
          className="form-input"
          placeholder="Search for Countries"
          variant="outlined"
          InputProps={{
            startAdornment: <img width="16px" height="16px" src="/image.svg" />,
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "43.5px",
              backgroundColor: "#fff",
              paddingLeft: "13px",
              borderRadius: "5px",
              fontSize: "15px",
            },
            "& .MuiInputBase-input": { paddingLeft: "11px", color: "#808080" },
            width: "651px",
          }}
        />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
