import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ className = "" }) => {
  return (
    <div className={`sidebar ${className}`}>
      <div className="checkout-details2">
        <div className="details-header">
          <div className="header3">
            <div className="checkout-details3">Checkout Details</div>
          </div>
        </div>
        <div className="total-items-wrapper">
          <div className="total-items">
            <div className="cart-subtotal1">Cart Subtotal</div>
            <div className="total-separators">$360.00</div>
          </div>
        </div>
        <div className="shipping-items-wrapper">
          <div className="shipping-items">
            <div className="shipping-labels2">
              <div className="shipping-handling1">{`Shipping & Handling`}</div>
              <div className="other-taxes1">Other Taxes</div>
            </div>
            <div className="shipping-labels3">
              <div className="div12">$0.00</div>
              <div className="div13">$0.00</div>
            </div>
          </div>
        </div>
        <div className="sidebar-divider-wrapper">
          <div className="sidebar-divider" />
        </div>
        <div className="checkout-details-inner">
          <div className="grand-total-group">
            <div className="grand-total1">Grand Total</div>
            <div className="div14">$360.00</div>
          </div>
        </div>
      </div>
      <div className="transfer-options">
        <div className="header4">
          <div className="transfer-options1">Transfer Options</div>
        </div>
        <div className="checkout-details4">
          <div className="logos-block">
            <div className="block-13">
              <div className="logo-block">
                <img
                  className="image-1-icon2"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="bank-transfer">
                <p className="bank">Bank</p>
                <p className="transfer">Transfer</p>
              </div>
            </div>
            <div className="block-25">
              <div className="logo-block1">
                <img
                  className="image-2-icon"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="google-pay">
                <p className="google">Google</p>
                <p className="pay">Pay</p>
              </div>
            </div>
            <div className="block-3">
              <div className="logo-block2">
                <img
                  className="image-3-icon"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="apple-pay">
                <p className="apple">Apple</p>
                <p className="pay1">Pay</p>
              </div>
            </div>
            <div className="block-4">
              <div className="logo-block3">
                <img
                  className="image-4-icon"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="paypal">PayPal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout2">
        <div className="header5">
          <div className="checkout3">Checkout</div>
        </div>
        <div className="checkout-details5">
          <div className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </div>
          <Button
            className="button17"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00a11a",
              borderRadius: "4px",
              "&:hover": { background: "#00a11a" },
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
