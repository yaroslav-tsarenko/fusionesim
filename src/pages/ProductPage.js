import ResponsiveNavbar1 from "../components/ResponsiveNavbar1";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import Background from "../components/Background";
import FrameComponent11 from "../components/FrameComponent11";
import ResourceIcons from "../components/ResourceIcons";
import ResourceIcons1 from "../components/ResourceIcons1";
import Footer2 from "../components/Footer2";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <ResponsiveNavbar1 />
      <section className="search">
        <div className="search-title">
          <h1 className="its-time-to">IT'S TIME TO BE GLOBAL</h1>
        </div>
        <div className="form-input">
          <img className="image-icon" alt="" src="/image.svg" />
          <div className="container">
            <div className="search-for-countries">Search for Countries</div>
          </div>
        </div>
      </section>
      <section className="background">
        <div className="europe-title">
          <h1 className="heading-1">Europe</h1>
        </div>
        <FrameComponent10 />
        <div className="more-plans">
          <FrameComponent9 />
        </div>
      </section>
      <Background />
      <FrameComponent11 />
      <section className="help-center-wrapper">
        <div className="help-center">
          <div className="help-header">
            <div className="help-title">
              <div className="help-subtitle">
                <h1 className="heading-3">Help Center</h1>
                <div className="support">
                  <div className="heading-31">We're here for you</div>
                </div>
              </div>
            </div>
            <div className="help-links">
              <ResourceIcons
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propDebugCommit2="unset"
              />
              <ResourceIcons1
                linkHepSmilelysvg="/link--hepsmilelysvg1@2x.png"
                propDebugCommit="unset"
                propDebugCommit1="unset"
                propDebugCommit2="unset"
              />
            </div>
          </div>
          <div className="install-guides-parent">
            <div className="install-guides">
              <div className="install-guide">
                <div className="backgroundshadow">
                  <img
                    className="link-help-clogsvg"
                    loading="lazy"
                    alt=""
                    src="/link--helpclogsvg1@2x.png"
                  />
                </div>
                <div className="link-troubleshooting">Troubleshooting</div>
              </div>
              <div className="management-guide">
                <div className="backgroundshadow1">
                  <img
                    className="link-help-arrowsvg"
                    loading="lazy"
                    alt=""
                    src="/link--helparrowsvg1@2x.png"
                  />
                </div>
                <div className="learn-guides">
                  <div className="link-installation">Installation guides</div>
                  <div className="master-your-esim">Master your eSIM</div>
                </div>
              </div>
            </div>
            <div className="revolution">
              <div className="brainwash">
                <div className="backgroundshadow2">
                  <img
                    className="link-help-switchsvg"
                    loading="lazy"
                    alt=""
                    src="/link--helpswitchsvg1@2x.png"
                  />
                </div>
                <div className="testimonial">
                  <div className="link-manage">Manage your eSIM</div>
                  <div className="link-be">Be your own boss</div>
                </div>
              </div>
              <div className="author">
                <div className="rating">
                  <div className="backgroundshadow3">
                    <img
                      className="link-help-brainsvg"
                      loading="lazy"
                      alt=""
                      src="/link--helpbrainsvg1@2x.png"
                    />
                  </div>
                  <div className="footer">
                    <div className="link-mobile">Mobile Brainwash</div>
                    <div className="link-learn">
                      Learn about the mobile revolution
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-links">
        <div className="group-2-4">
          <div className="brand-logo">
            <img
              className="ausvg-icon"
              loading="lazy"
              alt=""
              src="/ausvg.svg"
            />
          </div>
          <div className="legal">
            <div className="div">★ ★ ★ ★ ★</div>
          </div>
          <div className="i-recently-switched-container">
            <span>
              <p className="i-recently-switched">
                I recently switched to [eSIM Brand] and the experience has been
                nothing short of amazing. The convenience of not having to
                fiddle with physical SIM cards is a game-changer. Activating the
                eSIM was incredibly simple, and I was up and running within
                minutes.
              </p>
              <p className="traveling-internationally-has">
                Traveling internationally has never been easier. With [eSIM
                Brand], I can seamlessly switch between local carriers without
                the hassle of finding and purchasing local SIM cards. The
                connection is always reliable, and the data speeds are
                impressive no matter where I am.
              </p>
            </span>
          </div>
          <div className="terms">
            <div className="cite-alex">Alex Thompson</div>
          </div>
        </div>
        <div className="group-2-7">
          <div className="ausvg-wrapper">
            <img className="ausvg-icon1" alt="" src="/ausvg-1.svg" />
          </div>
          <div className="wrapper">
            <div className="div1">★ ★ ★ ★ ★</div>
          </div>
          <div className="what-stands-out-container">
            <p className="what-stands-out">
              What stands out the most is the excellent customer support.
              Anytime I’ve had questions or needed assistance, their team has
              been prompt, friendly, and very knowledgeable. It's clear that
              they prioritize their customers’ satisfaction.
            </p>
            <p className="overall-esim-brand">
              Overall, [eSIM Brand] has revolutionized my mobile experience,
              making it more flexible, efficient, and stress-free.
            </p>
          </div>
          <div className="cite-alex-thompson-wrapper">
            <div className="cite-alex1">Alex Thompson</div>
          </div>
        </div>
        <div className="group-2-6">
          <div className="articles">
            <img className="ausvg-icon2" alt="" src="/ausvg-2.svg" />
          </div>
          <div className="summer-travel">
            <div className="div2">★ ★ ★ ★ ★</div>
          </div>
          <div className="i-recently-switched-container1">
            <p className="i-recently-switched1">
              I recently switched to [eSIM Brand] and the experience has been
              nothing short of amazing. The convenience of not having to fiddle
              with physical SIM cards is a game-changer. Activating the eSIM was
              incredibly simple, and I was up and running within minutes.
            </p>
            <p className="traveling-internationally-has1">
              Traveling internationally has never been easier. With [eSIM
              Brand], I can seamlessly switch between local carriers without the
              hassle of finding and purchasing local SIM cards. The connection
              is always reliable, and the data speeds are impressive no matter
              where I am.
            </p>
          </div>
          <div className="terms-of-use">
            <div className="cite-alex2">Alex Thompson</div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default ProductPage;
