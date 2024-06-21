import PartnershipCards from "./PartnershipCards";
import PropTypes from "prop-types";
import "./Partnership.css";

const Partnership = ({ className = "" }) => {
  return (
    <div className={`partnership ${className}`}>
      <PartnershipCards
        partnerSuitcasepng="/partnersuitcasepng@2x.png"
        heading3TravelAgency="Travel Agency"
        offerYourRetailCustomersA="Offer your retail customers an added value service along with their flight ticket, hotel voucher and travel"
        insuranceWithESIMSolution="insurance. With eSIM solution they can enjoy data connectivity across 100+ countries worldwide."
      />
      <PartnershipCards
        partnerSuitcasepng="/partnershoppng@2x.png"
        heading3TravelAgency="Reseller / Distributor"
        offerYourRetailCustomersA="Start your own eSIM business and resell Fusionwavesim products. Control your margins and create any data plan "
        insuranceWithESIMSolution="you need to start selling your product. It can be with your own brand name, logo and website."
        propPadding="20.8px 137px 20.9px 20px"
        propHeight="128.3px"
        propWidth="160px"
        propPadding1="unset"
        propWidth1="313px"
      />
      <PartnershipCards
        partnerSuitcasepng="/partnerspeakerpng@2x.png"
        heading3TravelAgency="Marketing Channel"
        offerYourRetailCustomersA="Offer your retail customers an added value service along with their flight ticket, hotel voucher and travel"
        insuranceWithESIMSolution="insurance. With eSIM solution they can enjoy data connectivity across 100+ countries worldwide."
        propPadding="10px 219px 10px 20px"
        propHeight="150px"
        propWidth="150px"
        propPadding1="20px 0px"
        propWidth1="287px"
      />
      <h3 className="to-learn-more">
        To learn more on Fusionwavesim affiliate program contact us at:
        info@fusionwavesim.app
      </h3>
    </div>
  );
};

Partnership.propTypes = {
  className: PropTypes.string,
};

export default Partnership;
