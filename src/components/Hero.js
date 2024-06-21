import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <h1 className="stay-connected-anywhere">
        Stay Connected, Anywhere You Roam
      </h1>
      <div className="experience-the-world">
        Experience the world without the hassle of swapping SIM cards or
        incurring hefty roaming charges. Our eSIM plans offer flexible,
        affordable, and reliable data wherever your journey takes you.
      </div>
      <TextField
        className="form-input1"
        placeholder="Search for Countries"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "43.5px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          },
          "& .MuiInputBase-input": { color: "#808080" },
          width: "494px",
        }}
      />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
