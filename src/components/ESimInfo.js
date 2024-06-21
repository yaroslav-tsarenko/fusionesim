import PropTypes from "prop-types";
import "./ESimInfo.css";

const ESimInfo = ({ className = "" }) => {
  return (
    <div className={`e-sim-info ${className}`}>
      <div className="paragraphbackground">
        <h1 className="heading-2">eSIM for Xiaomi</h1>
        <div className="heading-21">eSIM compatible Devices – Xiaomi</div>
      </div>
      <div className="phone-image">
        <img className="svg-icon" loading="lazy" alt="" src="/svg@2x.png" />
        <div className="phone-brand">
          <h3 className="heading-11">xiaomi</h3>
        </div>
      </div>
      <h1 className="heading-22">How does eSIM for Xiaomi work?</h1>
      <div className="esim-compatible-xiaomi-devices">
        eSIM-compatible Xiaomi devices
      </div>
      <div className="item-xiaomi-container">
        <p className="xiaomi-12-pro">Xiaomi 12 Pro</p>
        <p className="xiaomi-12">Xiaomi 12</p>
        <p className="xiaomi-12x">Xiaomi 12X</p>
        <p className="xiaomi-mi-11">Xiaomi Mi 11 Ultra</p>
        <p className="xiaomi-mi-111">Xiaomi Mi 11 Pro</p>
        <p className="xiaomi-mi-112">Xiaomi Mi 11</p>
        <p className="xiaomi-mi-10">Xiaomi Mi 10 Pro</p>
        <p className="xiaomi-mi-101">Xiaomi Mi 10</p>
        <p className="xiaomi-mi-10t">Xiaomi Mi 10T Pro</p>
        <p className="xiaomi-mi-10t1">Xiaomi Mi 10T</p>
        <p className="xiaomi-mi-10t2">Xiaomi Mi 10T Lite</p>
        <p className="xiaomi-mi-note">Xiaomi Mi Note 10 Lite</p>
        <p className="xiaomi-redmi-note">Xiaomi Redmi Note 11 Pro 5G</p>
        <p className="xiaomi-redmi-note1">Xiaomi Redmi Note 10 Pro</p>
        <p className="xiaomi-poco-f4">Xiaomi Poco F4</p>
        <p className="xiaomi-poco-f3">Xiaomi Poco F3</p>
        <p className="xiaomi-poco-x3">Xiaomi Poco X3 Pro</p>
      </div>
    </div>
  );
};

ESimInfo.propTypes = {
  className: PropTypes.string,
};

export default ESimInfo;
