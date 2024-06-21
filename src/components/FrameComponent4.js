import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`checkoutpage-inner ${className}`}>
      <div className="product-cards-parent">
        <div className="product-cards">
          <div className="card-footer">
            <div className="header">
              <div className="header-child" />
              <div className="product-name">
                <div className="product">Product</div>
              </div>
              <div className="price-quantity-header">
                <div className="price">Price</div>
                <div className="quantity">Quantity</div>
              </div>
              <div className="total">Total</div>
            </div>
            <div className="product-details">
              <div className="travel-card">
                <div className="travel-card-info">
                  <div className="travel-icon" />
                  <div className="travel-giftcards">
                    <p className="travel2">Travel</p>
                    <p className="giftcards">GiftCards</p>
                  </div>
                  <div className="usd-100-10001">USD $100 -$1000</div>
                </div>
                <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
              </div>
              <div className="discount-info">
                <div className="travel-giftcards1">Travel Giftcards</div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="credits-details">
                <div className="credits-values">$120.00</div>
                <div className="credits1">12 Credits</div>
              </div>
              <div className="quantity-buttons-parent">
                <div className="quantity-buttons">
                  <div className="quantity-icons">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <div className="empty3">3</div>
                  <input className="quantity-icons1" type="checkbox" />
                </div>
                <FormControl
                  className="hourly-details"
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
                        src="/empty.svg"
                        style={{ marginRight: "16px" }}
                      />
                    )}
                  >
                    <MenuItem>Hourly</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="empty4">$120.00</div>
            </div>
          </div>
          <FrameComponent5
            image5="/image-5@2x.png"
            entertainmentGiftCard="Entertainment Gift Card"
            entertaimentGiftCard="Entertaiment gift card"
          />
          <FrameComponent5
            image5="/image-5@2x.png"
            entertainmentGiftCard={`Beauty & Spa Gift Card`}
            entertaimentGiftCard="Beauty Gift Card"
            propPadding="52.6px 29px 7.8px"
            propWidth="166.4px"
            propHeight="131px"
            propHeight1="unset"
            propLineHeight="22px"
          />
          <div className="divider-parent">
            <div className="divider" />
            <div className="action-buttons">
              <Button
                className="button13"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#080808",
                  fontSize: "16",
                  borderColor: "#080808",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#080808" },
                  width: 120,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button14"
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
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header1">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="total-details">
            <div className="total-values">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="empty5">$360.00</div>
            </div>
          </div>
          <div className="shipping-details">
            <div className="shipping-values">
              <div className="shipping-labels">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="shipping-labels1">
                <div className="div9">$0.00</div>
                <div className="div10">$0.00</div>
              </div>
            </div>
          </div>
          <div className="footer-divider">
            <div className="footer-divider-child" />
          </div>
          <div className="total-details1">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div11">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
