import PropTypes from "prop-types";
import "./Group.css";

const Group = ({ className = "" }) => {
  return (
    <div className={`group-2-61 ${className}`}>
      <div className="user-avatar">
        <img className="ausvg-icon5" alt="" src="/ausvg-2.svg" />
      </div>
      <div className="testimonial-rating">
        <div className="div7">★ ★ ★ ★ ★</div>
      </div>
      <div className="i-recently-switched-container3">
        <p className="i-recently-switched3">
          I recently switched to [eSIM Brand] and the experience has been
          nothing short of amazing. The convenience of not having to fiddle with
          physical SIM cards is a game-changer. Activating the eSIM was
          incredibly simple, and I was up and running within minutes.
        </p>
        <p className="traveling-internationally-has3">
          Traveling internationally has never been easier. With [eSIM Brand], I
          can seamlessly switch between local carriers without the hassle of
          finding and purchasing local SIM cards. The connection is always
          reliable, and the data speeds are impressive no matter where I am.
        </p>
      </div>
      <div className="testimonial-author">
        <div className="cite-alex5">Alex Thompson</div>
      </div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
