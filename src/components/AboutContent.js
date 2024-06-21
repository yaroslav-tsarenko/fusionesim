import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./AboutContent.css";

const AboutContent = ({ className = "" }) => {
  return (
    <div className={`about-content ${className}`}>
      <div className="overlayshadow">
        <div className="background1">
          <h1 className="about-us">About Us</h1>
          <h1 className="what-is-an">What is an eSim?</h1>
        </div>
        <div className="about-details">
          <div className="about-paragraph">
            <div className="about-lead">
              <div className="for-over-18-container">
                <span>
                  <p className="for-over-18">
                    For over 18 years, Fusionwavesim has been a leading provider
                    of reliable and secure mobile experiences, specializing in
                    international roaming solutions. Built upon a foundation of
                    excellence, we’ve empowered travelers and global citizens to
                    stay connected across borders, offering seamless
                    communication wherever their journeys take them. 
                  </p>
                  <p className="while-we-began">
                    While we began by providing traditional physical SIM cards,
                    our commitment to innovation has led us to expand our
                    offerings, ensuring customers have access to the latest
                  </p>
                  <p className="connectivity-technologies-tod">
                    connectivity technologies. Today, we stand as a trusted
                  </p>
                  <p className="partner-delivering-cutting-ed">
                    partner, delivering cutting-edge mobile solutions that keep
                    the world within reach.
                  </p>
                </span>
              </div>
            </div>
            <div className="an-esim-embedded-container">
              <p className="an-esim-embedded">
                An eSim (embedded SIM) is a tiny chip that is embedded
              </p>
              <p className="directly-into-a">
                directly into a device, such as a smartphone or tablet. This
              </p>
              <p className="eliminates-the-need">
                eliminates the need for a physical SIM card, which can be
              </p>
              <p className="lost-or-damaged">
                lost or damaged. With an eSim, you can easily switch
              </p>
              <p className="between-mobile-data">
                between mobile data plans from different providers,
              </p>
              <p className="without-having-to">
                without having to swap out a physical SIM card.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose">
        <div className="overlayshadow1">
          <div className="background2">
            <h1 className="why-choose-fusionwavesim-container">
              <p className="why-choose1">Why choose</p>
              <p className="fusionwavesim1">Fusionwavesim?</p>
            </h1>
            <div className="mission">
              <h1 className="our-mission">Our mission</h1>
            </div>
            <img
              className="background-child"
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className="benefits">
            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-description">
                  <div className="we-offer-a-container">
                    <p className="we-offer-a">
                      We offer a wide range of eSim plans to suit your needs,
                    </p>
                    <p className="whether-youre-a">
                      whether you’re a frequent traveler, a casual data user, or
                    </p>
                    <p className="somewhere-in-between">
                      somewhere in between. We also offer a variety of
                    </p>
                    <p className="features-that-make">
                      features that make it easy to manage your eSim, such as:
                    </p>
                  </div>
                  <div className="customer-support-our">
                    24/7 customer support: Our friendly and knowledgeable
                    customer support team is available 24/7 to help you with any
                    questions you may have.
                  </div>
                </div>
                <div className="our-mission-is-container">
                  <span className="our-mission-is-container1">
                    <p className="our-mission-is">
                      Our mission is to make it easy for everyone to connect to
                    </p>
                    <p className="the-world-around">
                      the world around them. We believe that eSim technology
                    </p>
                    <p className="has-the-potential">
                      has the potential to revolutionize the way we use mobile
                    </p>
                    <p className="data-and-were">
                      data, and we’re committed to making it accessible to
                    </p>
                    <p className="everyone">everyone.</p>
                  </span>
                </div>
              </div>
              <div className="benefit-image">
                <div className="benefit-image-wrapper">
                  <div className="competitive-prices-we">
                    Competitive prices: We offer competitive prices on our eSim
                    plans, so you can be sure you’re getting the best value for
                    your money.
                  </div>
                </div>
                <div className="benefit-placeholder">
                  <img
                    className="about-sima-768x382jpg-icon"
                    loading="lazy"
                    alt=""
                    src="/about-sima768x382jpg@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="team-content">
          <div className="team-background">
            <div className="background3">
              <div className="our-team">Our team</div>
            </div>
            <div className="we-are-a-team-of-experienced-p-wrapper">
              <div className="we-are-a-container">
                <span>
                  <p className="we-are-a">
                    We are a team of experienced professionals with a
                  </p>
                  <p className="passion-for-technology">
                    passion for technology and a commitment to customer
                  </p>
                  <p className="service-were-excited">
                    service. We’re excited to be at the forefront of the eSim
                  </p>
                  <p className="revolution-and-were">
                    revolution, and we’re confident that we can provide you
                  </p>
                  <p className="with-the-best">
                    with the best possible eSim experience.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="team-background1">
            <Button
              className="background4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "18",
                background: "#f2f6f8",
                borderRadius: "15px",
                "&:hover": { background: "#f2f6f8" },
                height: 70,
              }}
            >
              Join us on our journey
            </Button>
            <div className="we-invite-you-to-join-us-on-ou-wrapper">
              <div className="we-invite-you-container">
                <p className="we-invite-you">
                  We invite you to join us on our journey to connect the
                </p>
                <p className="world-one-esim">
                  world, one eSim at a time. Sign up for an eSim plan today and
                  experience the freedom and flexibility of eSim
                </p>
                <p className="technology">technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action">
        <div className="call-to-action-content">
          <div className="call-to-action-background">
            <div className="background5">
              <div className="partner-with-us">Partner with us</div>
            </div>
            <div className="background6">
              <div className="contact-us">Contact us</div>
            </div>
          </div>
          <div className="contact">
            <div className="contact-content">
              <div className="contact-info">
                <div className="if-you-share-container">
                  <span>
                    <p className="if-you-share">
                      If you share our passion for innovation, we encourage
                    </p>
                    <p className="you-to-contact">
                      you to contact us about partnering as an affiliate. We’ll
                    </p>
                    <p className="work-together-to">
                      work together to build a mutually beneficial
                    </p>
                    <p className="collaboration">collaboration.</p>
                  </span>
                </div>
              </div>
              <div className="list">
                <div className="item-link6">
                  <div className="contact-icons">
                    <div className="symbol1"></div>
                  </div>
                  <div className="csfusionwavesimapp">
                    cs@fusionwavesim.app 
                  </div>
                </div>
                <div className="item-link7">
                  <div className="symbol-wrapper">
                    <div className="symbol2"></div>
                  </div>
                  <div className="wwwfacebookcomfusionwavesim">
                    www.facebook.com/fusionwavesimm 
                  </div>
                </div>
                <div className="item-link8">
                  <div className="symbol-container">
                    <div className="symbol3"></div>
                  </div>
                  <div className="wwwinstagramcomfusionwavesi">
                    www.instagram.com/fusionwavesim 
                  </div>
                </div>
                <div className="item-link9">
                  <div className="symbol-frame">
                    <a
                      className="symbol4"
                      href="https://www.figma.com/design/APDI1ZLg66zhiiNhe7rPOt?node-id=1-2"
                      target="_blank"
                    >
                      
                    </a>
                  </div>
                  <a
                    className="wwwfusionwavesimapp"
                    href="https://www.figma.com/design/APDI1ZLg66zhiiNhe7rPOt?node-id=1-2"
                    target="_blank"
                  >
                    www.fusionwavesim.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutContent.propTypes = {
  className: PropTypes.string,
};

export default AboutContent;
