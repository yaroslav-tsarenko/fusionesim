import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section1 ${className}`}>
      <div className="hero-content1">
        <a
          className="link-globalesim"
          href="https://www.figma.com/design/APDI1ZLg66zhiiNhe7rPOt?node-id=1-2"
          target="_blank"
        >{`Fusionwavesim > Learn about ICCID (Integrated Circuit Card Identifier)`}</a>
        <div className="hero-title">
          <h1 className="heading-1">
            Learn about ICCID (Integrated Circuit Card Identifier)
          </h1>
        </div>
        <img
          className="d7a2d799d7a6d795d791-icon"
          loading="lazy"
          alt=""
          src="/d7a2d799d7a6d795d791d79cd79cd790d7a9d79d262048x1024jpg@2x.png"
        />
      </div>
      <div className="description">
        <div className="iccid-explanation">
          <div className="iccid-stands-for-container">
            <span className="iccid-stands-for-container1">
              <p className="iccid-stands-for">
                ICCID stands for Integrated Circuit Card Identifier. It’s
                essentially a unique serial number for your SIM card (or
              </p>
              <p className="esim-like-a">
                eSIM), like a digital fingerprint. This code is crucial in
                cellular connectivity, particularly for Internet of Things (IoT)
              </p>
              <p className="devices">devices.</p>
              <p className="imagine-a-vast">
                Imagine a vast network needing to identify millions of devices.
                The ICCID acts like a name tag, allowing the network
              </p>
              <p className="to-recognize-the">
                to recognize the specific SIM card and connect the corresponding
                device to the cellular network. This ensures the
              </p>
              <p className="suitable-device-receives">
                suitable device receives data and transmits information
                correctly. For IoT devices that rely solely on cellular
              </p>
              <p className="connectivity-a-valid">
                connectivity, a valid ICCID is vital to function correctly.
              </p>
            </span>
          </div>
          <div className="breaking-down-the">
            Breaking down the ICCID number: 
          </div>
          <div className="first-two-digits-container">
            <span className="first-two-digits-container1">
              <p className="first-two-digits"> First two digits (89)</p>
              <p className="keeping-track-of">
                Keeping track of the vast telecom products is more manageable
                with industry codes. NAICS is the central system in
              </p>
              <p className="the-us-categorizing">
                the US, categorizing everything from cell service providers
                (NAICS 5171) to resellers (NAICS 517911). These codes
              </p>
              <p className="benefit-everyone">
                benefit everyone – businesses track market trends, governments
                collect data, and you can find the correct code
              </p>
              <p className="for-your-telecom">
                for your telecom product on the US Census Bureau website.
              </p>
              <p className="next-1-6-digits"> Next 1-6 digits</p>
              <p className="the-iccid-integrated">
                The ICCID (Integrated Circuit Card Identifier) acts like a
                unique passport for your SIM card, granting access to
              </p>
              <p className="cellular-networks-this">
                cellular networks. This 18-22 digit code holds hidden
                information, including a crucial element for international
              </p>
              <p className="connectivity-the-country">
                connectivity: the country code.
              </p>
              <p className="established-by-the">
                Established by the International Telecommunications Union (ITU),
                the country code is embedded within the first
              </p>
              <p className="few-digits-of">
                few digits of the ICCID. It functions like a digital nationality
                marker, identifying the country where the SIM card was
              </p>
              <p className="issued-this-allows">
                issued. This allows cellular networks to recognize the SIM
                card’s origin and connect it to the appropriate network
              </p>
              <p className="infrastructure">infrastructure.</p>
              <p className="following-1-4-digits"> Following 1-4 digits</p>
              <p className="the-iccid-code">
                The ICCID code on your SIM card isn’t just a jumble of numbers!
                The middle digits hold a secret code called the
              </p>
              <p className="mnc-like-a">{`MNC, like a fingerprint for mobile networks. It tells the network which carrier (MNO) issued the SIM card, like AT&T`}</p>
              <p className="or-verizon-this">
                or Verizon. This matters because the network can tailor its
                services and features specifically for that carrier,
              </p>
              <p className="ensuring-you-get">
                ensuring you get the right data plan and network experience.
              </p>
              <p className="final-set-of"> Final set of digits</p>
              <p className="the-final-digits">
                The final digits of an ICCID code hold the key to a SIM card’s
                unique identity. Think of it like a fingerprint
              </p>
              <p className="permanently-etched-into">
                permanently etched into the code.
              </p>
              <p className="these-final-digits">
                These final digits, typically 6 to 8, act as a serial number for
                the SIM card. Imagine millions of SIM cards issued by
              </p>
              <p className="the-same-carrier">
                the same carrier (identified by the MNC). This unique code sets
                each SIM card apart, ensuring no mistaking one for
              </p>
              <p className="another-within-that">
                another within that specific mobile network.
              </p>
            </span>
          </div>
          <div className="what-is-an1">What is an ICCID?</div>
          <div className="consider-your-sim-container">
            <span className="consider-your-sim-container1">
              <p className="consider-your-sim">
                Consider your SIM card the key to your phone’s cellular network.
                There’s a unique code embedded within it called
              </p>
              <p className="the-iccid-integrated1">
                the ICCID (Integrated Circuit Card Identifier). Imagine it as a
                digital fingerprint, stretching from 18 to 22 digits long.
              </p>
              <p className="this-code-is">
                This code is much more than just random numbers. Packed within
                the ICCID are secret details about your SIM
              </p>
              <p className="card">card:</p>
              <p className="country-code-the">
                Country Code: The first few digits identify the country where
                the SIM card was issued.
              </p>
              <p className="home-network-a">
                Home Network: A specific section reveals the mobile carrier
                associated with the SIM card.
              </p>
              <p className="unique-id-the">
                Unique ID: The remaining digits act as a serial number, making
                your SIM card one-of-a-kind.
              </p>
              <p className="finding-your-iccid">
                Finding your ICCID is easy. It’s usually printed directly on the
                back of the SIM card alongside tiny letters and
              </p>
              <p className="numbers-if-the">
                numbers. If the print is too small, don’t worry! The ICCID might
                also be included on the packaging materials that
              </p>
              <p className="came-with-your">
                came with your SIM card. So next time you need to identify your
                SIM card for troubleshooting or account
              </p>
              <p className="management-keep-an">
                management, keep an eye out for that unique 18-22-digit
                code—your ICCID.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="background7" />
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
