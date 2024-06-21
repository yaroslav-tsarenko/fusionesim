import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FormHeader.css";

const FormHeader = ({ className = "" }) => {
  return (
    <div className={`form-header ${className}`}>
      <h1 className="checkout1">Checkout</h1>
      <div className="header2">
        <div className="billing-details">Billing Details</div>
      </div>
      <div className="form-field-block">
        <div className="row-1">
          <TextField
            className="block-1"
            placeholder="First Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#080808" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#080808" },
            }}
          />
          <TextField
            className="block-2"
            placeholder="Last Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#080808" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#080808" },
            }}
          />
        </div>
        <div className="row-2">
          <TextField
            className="block-11"
            placeholder="Company Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#080808" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#080808" },
            }}
          />
          <div className="block-21">
            <div className="country">Country</div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
        </div>
        <TextField
          className="row-3"
          placeholder="Street Address"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#080808" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#080808" },
          }}
        />
        <TextField
          className="block-22"
          placeholder="Apartment / Suite / Unit / etc. (Optional)"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#080808" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#080808" },
          }}
        />
        <TextField
          className="row-4"
          placeholder="Town / City"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#080808" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#080808" },
          }}
        />
        <TextField
          className="block-23"
          placeholder="Email Address"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#080808" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#080808" },
          }}
        />
        <div className="row-5">
          <TextField
            className="block-12"
            placeholder="ZIP"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#080808" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#080808" },
            }}
          />
          <TextField
            className="block-24"
            placeholder="Phone"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#080808" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#080808" },
            }}
          />
        </div>
      </div>
      <div className="form-divider" />
      <div className="header-items">
        <Button
          className="button15"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#080808",
            fontSize: "16",
            borderColor: "#080808",
            borderRadius: "4px",
            "&:hover": { borderColor: "#080808" },
            width: 127,
            height: 54,
          }}
        >
          Go Back
        </Button>
        <Button
          className="button16"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#080808",
            borderRadius: "4px",
            "&:hover": { background: "#080808" },
            width: 130,
            height: 54,
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

FormHeader.propTypes = {
  className: PropTypes.string,
};

export default FormHeader;
