import ResponsiveNavbar from "../components/ResponsiveNavbar";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="termsandconditions">
      <ResponsiveNavbar />
      <div className="terms-and-conditions-wrapper">
        <h1 className="terms-and-conditions">Terms and Conditions</h1>
      </div>
      <main className="welcome-to-fusionwavesim-thes-parent">
        <div className="welcome-to-fusionwavesim">
          Welcome to FusionWaveSim! These Terms and Conditions ("Terms") govern
          your use of our website and services, including the purchase and
          activation of electronic SIM cards ("eSIMs"). By accessing or using
          our website and services, you agree to be bound by these Terms. If you
          do not agree with any part of these Terms, you must not use our
          website or services.
        </div>
        <div className="information-we-collect-parent">
          <h1 className="information-we-collect-container">
            <ol className="information-we-collect">
              <li>Information We Collect</li>
            </ol>
          </h1>
          <div className="about-titles-parent">
            <div className="about-titles">
              <h3 className="about-fusionwavesim">1.1 About FusionWaveSim</h3>
              <div className="fusionwavesim-is-a">
                FusionWaveSim is a provider of electronic SIM cards (eSIMs) that
                allow users to access mobile networks in multiple countries. Our
                goal is to offer seamless connectivity to our customers,
                enabling them to stay connected wherever they go.
              </div>
            </div>
            <div className="about-titles1">
              <h3 className="acceptance-of-terms">1.2 Acceptance of Terms</h3>
              <div className="by-using-our">
                By using our services, you confirm that you accept these Terms
                and that you agree to comply with them. If you do not agree to
                these Terms, you must not use our services.
              </div>
            </div>
            <div className="about-titles2">
              <h3 className="changes-to-terms">1.3 Changes to Terms</h3>
              <div className="we-may-revise">
                We may revise these Terms at any time by updating this page. It
                is your responsibility to check this page regularly for any
                changes. Your continued use of our services after any changes
                are made will constitute your acceptance of the revised Terms.
              </div>
            </div>
          </div>
        </div>
        <FrameComponent1
          accountRegistrationAndUse="Account Registration and Use"
          eligibility="2.1 Eligibility"
          toUseOurServicesYouMustBe="To use our services, you must be at least 18 years old and have the legal capacity to enter into a binding contract. By registering an account with FusionWaveSim, you represent and warrant that you meet these requirements."
          accountCreation="2.2 Account Creation"
          youMayBeRequiredToCreateA="You may be required to create an account to access certain features of our services. When creating an account, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account."
          accountSecurity="2.3 Account Security"
          youAgreeToNotifyUsImmedia="You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to protect your account or your failure to notify us of unauthorized access."
          accountTermination="2.4 Account Termination"
          weReserveTheRightToSuspen="We reserve the right to suspend or terminate your account at any time, for any reason, including if you violate these Terms. Upon termination, your right to use our services will immediately cease."
        />
        <FrameComponent1
          accountRegistrationAndUse="eSIM Services"
          eligibility="3.1 eSIM Purchase"
          toUseOurServicesYouMustBe="To purchase an eSIM, you must select the desired country and plan, and provide the necessary payment information. All prices are subject to change without notice."
          accountCreation="3.2 Activation and Use"
          youMayBeRequiredToCreateA="Upon successful purchase, you will receive instructions on how to activate your eSIM. You must follow these instructions carefully to ensure proper activation. You are responsible for ensuring that your device is compatible with the eSIM."
          accountSecurity="3.3 Service Availability"
          youAgreeToNotifyUsImmedia="While we strive to provide uninterrupted service, we do not guarantee that the eSIM services will always be available, timely, secure, or error-free. Service availability may be affected by factors outside our control, such as network coverage and local regulations."
          accountTermination="3.4 Data Usage and Limits"
          weReserveTheRightToSuspen="Each eSIM plan comes with specific data usage limits. It is your responsibility to monitor your data usage and to purchase additional data if needed. Excessive data usage may result in additional charges or suspension of service."
        />
        <FrameComponent1
          accountRegistrationAndUse="Fees and Payment"
          eligibility="4.1 Pricing"
          toUseOurServicesYouMustBe="All prices for eSIM plans and other services are listed on our website and are subject to change. Prices are inclusive of applicable taxes unless otherwise stated."
          accountCreation="4.2 Payment Methods"
          youMayBeRequiredToCreateA="We accept various payment methods, including credit cards and other electronic payment options. By providing your payment information, you authorize us to charge the applicable fees to your chosen payment method."
          accountSecurity="4.3 Billing and Charges"
          youAgreeToNotifyUsImmedia="You will be billed for the eSIM plan and any additional services at the time of purchase. All charges are non-refundable, except as expressly stated in these Terms or required by law."
          accountTermination="4.4 Refunds"
          weReserveTheRightToSuspen="Refunds may be issued at our sole discretion, and only in cases where the eSIM service could not be activated or used due to a fault on our part. Requests for refunds must be submitted within 14 days of purchase."
        />
        <div className="user-responsibilities-parent">
          <h1 className="user-responsibilities">
            <ol className="user-responsibilities1">
              <li>User Responsibilities</li>
            </ol>
          </h1>
          <div className="frame-parent">
            <div className="compliance-with-laws-parent">
              <h3 className="compliance-with-laws">5.1 Compliance with Laws</h3>
              <div className="you-agree-to">
                You agree to use our services in compliance with all applicable
                laws and regulations. You are solely responsible for your
                conduct and any data or content that you transmit or receive
                using our services.
              </div>
            </div>
            <div className="prohibited-activities-parent">
              <h3 className="prohibited-activities">
                5.2 Prohibited Activities
              </h3>
              <div className="you-must-not-container">
                <p className="you-must-not">
                  You must not use our services for any unlawful or prohibited
                  purpose, including but not limited to:
                </p>
                <p className="blank-line">&nbsp;</p>
                <ul className="engaging-in-fraudulent-or-dece">
                  <li className="engaging-in-fraudulent">
                    Engaging in fraudulent or deceptive practices
                  </li>
                  <li className="interfering-with-or">
                    Interfering with or disrupting the integrity or performance
                    of our services
                  </li>
                  <li className="attempting-to-gain">
                    Attempting to gain unauthorized access to our systems or
                    accounts
                  </li>
                  <li>Violating the privacy or rights of others</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          intellectualProperty="Intellectual Property"
          ownership="6.1 Ownership"
          allIntellectualPropertyRi="All intellectual property rights in our website and services, including but not limited to text, graphics, logos, and software, are owned by or licensed to FusionWaveSim. You do not acquire any ownership rights by using our services."
          license="6.2 License"
          weGrantYouALimitedNonExcl="We grant you a limited, non-exclusive, non-transferable license to access and use our services for personal, non-commercial purposes, subject to these Terms. This license does not permit you to reproduce, distribute, modify, or create derivative works of our content without our prior written consent."
        />
        <FrameComponent
          intellectualProperty="Privacy"
          ownership="7.1 Data Collection"
          allIntellectualPropertyRi="We collect and use personal data in accordance with our Privacy Policy, which is incorporated by reference into these Terms. By using our services, you consent to the collection and use of your data as described in our Privacy Policy."
          license="7.2 Data Security"
          weGrantYouALimitedNonExcl="We implement reasonable measures to protect your personal data from unauthorized access, use, or disclosure. However, we cannot guarantee the absolute security of your data."
          propLineHeight="135%"
        />
        <div className="disclaimers-and-limitation-of-parent">
          <h1 className="disclaimers-and-limitation-container">
            <ol className="disclaimers-and-limitation-of">
              <li>Disclaimers and Limitation of Liability</li>
            </ol>
          </h1>
          <div className="frame-group">
            <div className="disclaimers-parent">
              <h3 className="disclaimers">8.1 Disclaimers</h3>
              <div className="our-services-are">
                Our services are provided "as is" and "as available," without
                warranties of any kind, either express or implied. We disclaim
                all warranties, including but not limited to, implied warranties
                of merchantability, fitness for a particular purpose, and
                non-infringement.
              </div>
            </div>
            <div className="limitation-of-liability-parent">
              <h3 className="limitation-of-liability">
                8.2 Limitation of Liability
              </h3>
              <div className="to-the-fullest-container">
                <p className="to-the-fullest">
                  To the fullest extent permitted by law, FusionWaveSim will not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or
                  revenues, whether incurred directly or indirectly, or any loss
                  of data, use, goodwill, or other intangible losses, resulting
                  from:
                </p>
                <p className="blank-line1">&nbsp;</p>
                <ul className="your-use-of-or-inability-to-us">
                  <li className="your-use-of">
                    Your use of or inability to use our services
                  </li>
                  <li className="any-unauthorized-access">
                    Any unauthorized access to or use of our servers and/or any
                    personal data stored therein
                  </li>
                  <li className="any-interruption-or">
                    Any interruption or cessation of transmission to or from our
                    services
                  </li>
                  <li className="any-bugs-viruses">
                    Any bugs, viruses, or other harmful code that may be
                    transmitted to or through our services by any third party
                  </li>
                  <li>
                    Any errors or omissions in any content or for any loss or
                    damage incurred as a result of the use of any content
                    posted, emailed, transmitted, or otherwise made available
                    through our services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="indemnification-parent">
          <h1 className="indemnification">
            <ol className="indemnification1">
              <li>Indemnification</li>
            </ol>
          </h1>
          <div className="indemnification-content">
            <div className="you-agree-to-indemnify-defend-wrapper">
              <div className="you-agree-to1">
                You agree to indemnify, defend, and hold harmless FusionWaveSim,
                its affiliates, officers, directors, employees, and agents from
                and against any claims, liabilities, damages, losses, and
                expenses, including reasonable attorney's fees, arising out of
                or in any way connected with your access to or use of our
                services, your violation of these Terms, or your violation of
                any rights of another.
              </div>
            </div>
          </div>
        </div>
        <FrameComponent
          intellectualProperty="Governing Law and Dispute Resolution"
          ownership="10.1 Governing Law"
          allIntellectualPropertyRi="These Terms and your use of our services will be governed by and construed in accordance with the laws of the jurisdiction in which FusionWaveSim is headquartered, without regard to its conflict of law principles."
          license="10.2 Dispute Resolution"
          weGrantYouALimitedNonExcl="Any disputes arising out of or relating to these Terms or our services will be resolved through binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify. The arbitration will be conducted in the jurisdiction where FusionWaveSim is headquartered and will be governed by the rules of the American Arbitration Association."
          propLineHeight="135%"
        />
        <div className="miscellaneous-parent">
          <h1 className="miscellaneous">
            <ol className="miscellaneous1">
              <li>Miscellaneous</li>
            </ol>
          </h1>
          <div className="frame-container">
            <div className="entire-agreement-parent">
              <h3 className="entire-agreement">11.1 Entire Agreement</h3>
              <div className="these-terms-constitute">
                These Terms constitute the entire agreement between you and
                FusionWaveSim regarding the use of our services and supersede
                any prior agreements or understandings, whether written or oral.
              </div>
            </div>
            <div className="severability-parent">
              <h3 className="severability">11.2 Severability</h3>
              <div className="if-any-provision">
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions will remain in full
                force and effect.
              </div>
            </div>
            <div className="waiver-parent">
              <div className="waiver">11.3 Waiver</div>
              <div className="no-waiver-of">
                No waiver of any term of these Terms will be deemed a further or
                continuing waiver of such term or any other term, and
                FusionWaveSim's failure to assert any right or provision under
                these Terms will not constitute a waiver of such right or
                provision.
              </div>
            </div>
            <div className="assignment-parent">
              <div className="assignment">11.4 Assignment</div>
              <div className="you-may-not">
                You may not assign or transfer your rights or obligations under
                these Terms without our prior written consent. We may assign or
                transfer our rights and obligations under these Terms without
                restriction.
              </div>
            </div>
          </div>
        </div>
        <div className="contact-information-parent">
          <h1 className="contact-information">
            <ol className="contact-information1">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="contact-info">
            <div className="if-you-have-container">
              <p className="if-you-have">
                If you have any questions about these Terms or our services,
                please contact us at:
              </p>
              <p className="fusionwavesim-customer-suppor">{`FusionWaveSim, Customer Support `}</p>
              <p className="email-supportfusionwavesimc">{`Email: support@fusionwavesim.com `}</p>
              <p className="phone-1-800-123-4567">{`Phone: +1-800-123-4567 `}</p>
              <p className="address-123-main">
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
              <p className="blank-line2">&nbsp;</p>
              <p className="by-using-fusionwavesims">
                By using FusionWaveSim's services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer group1000006258="/group-1000006258-1@2x.png" />
    </div>
  );
};

export default TermsAndConditions;
