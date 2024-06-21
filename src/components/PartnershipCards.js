import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PartnershipCards.css";

const PartnershipCards = ({
  className = "",
  partnerSuitcasepng,
  heading3TravelAgency,
  offerYourRetailCustomersA,
  insuranceWithESIMSolution,
  propPadding,
  propHeight,
  propWidth,
  propPadding1,
  propWidth1,
}) => {
  const partnershipCardsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const partnerSuitcasepngIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const partnershipCardContentStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const heading3Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`partnership-cards ${className}`}
      style={partnershipCardsStyle}
    >
      <img
        className="partner-suitcasepng-icon"
        loading="lazy"
        alt=""
        src={partnerSuitcasepng}
        style={partnerSuitcasepngIconStyle}
      />
      <div
        className="partnership-card-content"
        style={partnershipCardContentStyle}
      >
        <h1 className="heading-3" style={heading3Style}>
          {heading3TravelAgency}
        </h1>
        <div className="offer-your-retail-container">
          <p className="offer-your-retail">{offerYourRetailCustomersA}</p>
          <p className="insurance-with-esim">{insuranceWithESIMSolution}</p>
        </div>
      </div>
    </div>
  );
};

PartnershipCards.propTypes = {
  className: PropTypes.string,
  partnerSuitcasepng: PropTypes.string,
  heading3TravelAgency: PropTypes.string,
  offerYourRetailCustomersA: PropTypes.string,
  insuranceWithESIMSolution: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default PartnershipCards;
