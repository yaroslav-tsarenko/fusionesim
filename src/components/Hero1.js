import PropTypes from "prop-types";
import "./Hero1.css";

const Hero1 = ({ className = "" }) => {
  return (
    <section className={`hero1 ${className}`}>
      <div className="search1">
        <div className="search-input">
          <h1 className="its-time-to1">IT'S TIME TO BE GLOBAL</h1>
        </div>
        <div className="form-input2">
          <img className="image-icon1" alt="" src="/image.svg" />
          <div className="container2">
            <div className="search-for-countries1">Search for Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero1.propTypes = {
  className: PropTypes.string,
};

export default Hero1;
