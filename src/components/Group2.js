import PropTypes from "prop-types";
import "./Group2.css";

const Group2 = ({ className = "" }) => {
  return (
    <div className={`group-2-41 ${className}`}>
      <div className="testimonial-cards">
        <img className="ausvg-icon3" loading="lazy" alt="" src="/ausvg.svg" />
      </div>
      <div className="testimonial-ratings">
        <div className="div5">★ ★ ★ ★ ★</div>
      </div>
      <div className="i-recently-switched-container2">
        <span>
          <p className="i-recently-switched2">
            I recently switched to [eSIM Brand] and the experience has been
            nothing short of amazing. The convenience of not having to fiddle
            with physical SIM cards is a game-changer. Activating the eSIM was
            incredibly simple, and I was up and running within minutes.
          </p>
          <p className="traveling-internationally-has2">
            Traveling internationally has never been easier. With [eSIM Brand],
            I can seamlessly switch between local carriers without the hassle of
            finding and purchasing local SIM cards. The connection is always
            reliable, and the data speeds are impressive no matter where I am.
          </p>
        </span>
      </div>
      <div className="testimonial-authors">
        <div className="cite-alex3">Alex Thompson</div>
      </div>
    </div>
  );
};

Group2.propTypes = {
  className: PropTypes.string,
};

export default Group2;
