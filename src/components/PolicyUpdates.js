import PropTypes from "prop-types";
import "./PolicyUpdates.css";

const PolicyUpdates = ({ className = "" }) => {
  return (
    <div className={`policy-updates1 ${className}`}>
      <h1 className="amendments-to-cancellation-container">
        <ol className="amendments-to-cancellation-pol">
          <li>Amendments to Cancellation Policy</li>
        </ol>
      </h1>
      <div className="update-details">
        <h3 className="changes-to-policy">7.1 Changes to Policy</h3>
        <div className="we-reserve-the1">
          We reserve the right to amend this Cancellation Policy at any time by
          posting the updated policy on our website. It is your responsibility
          to review this policy periodically for any changes. Your continued use
          of our services after any changes are made constitutes your acceptance
          of the revised policy.
        </div>
      </div>
      <div className="update-details1">
        <h3 className="effective-date">7.2 Effective Date</h3>
        <div className="this-cancellation-policy">
          This Cancellation Policy is effective as of the date it is approved.
          Any changes to the policy will apply to purchases or subscriptions
          made on or after the effective date.
        </div>
      </div>
    </div>
  );
};

PolicyUpdates.propTypes = {
  className: PropTypes.string,
};

export default PolicyUpdates;
