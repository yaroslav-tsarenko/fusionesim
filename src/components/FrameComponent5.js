import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  image5,
  entertainmentGiftCard,
  entertaimentGiftCard,
  propPadding,
  propWidth,
  propHeight,
  propHeight1,
  propLineHeight,
}) => {
  const cardInfoStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image5IconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const entertaimentGiftCardStyle = useMemo(() => {
    return {
      height: propHeight1,
      lineHeight: propLineHeight,
    };
  }, [propHeight1, propLineHeight]);

  return (
    <div className={`card-rows ${className}`}>
      <div className="dividers" />
      <div className="card-columns">
        <div className="card-info" style={cardInfoStyle}>
          <img
            className="image-5-icon"
            alt=""
            src={image5}
            style={image5IconStyle}
          />
          <div className="entertainment-gift-card">{entertainmentGiftCard}</div>
          <div className="usd-100-1000">USD $100 -$1000</div>
        </div>
        <div className="card-details">
          <div
            className="entertaiment-gift-card"
            style={entertaimentGiftCardStyle}
          >
            {entertaimentGiftCard}
          </div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="credits-info">
          <div className="empty">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="buttons-rows">
          <div className="buttons-columns">
            <div className="plus-buttons">
              <img className="icon-plus" alt="" src="/iconplus.svg" />
            </div>
            <div className="empty1">3</div>
            <input className="minus-buttons" type="checkbox" />
          </div>
          <FormControl
            className="hourly-rows"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#00a11a",
              borderRadius: "8px",
              width: "51.21951219512195%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "tt hoves",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="success" />
            <Select
              color="success"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/frame-1000002972-1.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="empty2">$120.00</div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,
  entertainmentGiftCard: PropTypes.string,
  entertaimentGiftCard: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propLineHeight: PropTypes.any,
};

export default FrameComponent5;
