import CountryCards1 from "./CountryCards1";
import CountryCards from "./CountryCards";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="countries">
        <h1 className="heading-32">Popular Countries</h1>
        <div className="popular-countries">
          <div className="featured-country">
            <div className="featured-country-card">
              <div className="featured-country-elements">
                <div className="wrapper-link-flaf-eastasiaj">
                  <img
                    className="link-flaf-eastasiajpg"
                    loading="lazy"
                    alt=""
                    src="/link--flaf-eastasiajpg@2x.png"
                  />
                </div>
                <div className="backgroundborder1">
                  <div className="hot-deal1">
                    <span className="hot-deal-txt-container">
                      <p className="hot1">Hot</p>
                      <p className="deal1">Deal</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="featured-country-info">
                <div className="frame-div">
                  <div className="far-east-wrapper">
                    <div className="far-east">Far East</div>
                  </div>
                  <div className="gb2">$15 / 10GB</div>
                </div>
              </div>
            </div>
          </div>
          <CountryCards1
            linkFlagOfMoroccowebp="/link--flagofmoroccowebp@2x.png"
            morocco="Morocco"
            gB="$46 / 10GB"
          />
          <CountryCards1
            linkFlagOfMoroccowebp="/link--flagofcuracaowebp@2x.png"
            morocco="Curacao"
            gB="$31 / 5GB"
            propWidth="61px"
            propMinWidth="61px"
            propMinWidth1="81px"
          />
          <div className="featured-country-two">
            <div className="featured-country-two-elements">
              <div className="wrapper-link-dubai-abu-dhabi">
                <img
                  className="link-dubai-abu-dhabi-uae-fla"
                  loading="lazy"
                  alt=""
                  src="/link--dubaiabudhabiuaeflagwebp@2x.png"
                />
              </div>
            </div>
            <div className="dubai-abu-dhabi-container">
              <span>
                <p className="dubai-abu">Dubai, Abu</p>
                <p className="dhabi-uae">{`Dhabi & UAE`}</p>
              </span>
            </div>
            <div className="gb-container">
              <div className="gb3">$4 / 1GB</div>
            </div>
          </div>
          <div className="country-cards2">
            <div className="frame-parent1">
              <div className="wrapper-link-flag-of-south-a-parent">
                <div className="wrapper-link-flag-of-south-a">
                  <img
                    className="link-flag-of-south-africawe"
                    loading="lazy"
                    alt=""
                    src="/link--flagofsouthafricawebp@2x.png"
                  />
                </div>
                <div className="backgroundborder2">
                  <b className="hot-deal2">
                    <p className="hot2">Hot</p>
                    <p className="deal2">Deal</p>
                  </b>
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="south-africa-parent">
                  <div className="south-africa">South Africa</div>
                  <div className="gb4">$17 / 10GB</div>
                </div>
              </div>
            </div>
          </div>
          <CountryCards
            linkFlagOfNewZealandwebp="/link--flagofnewzealandwebp@2x.png"
            newZealand="New Zealand"
          />
          <CountryCards
            linkFlagOfNewZealandwebp="/link--flagofusa1webp@2x.png"
            newZealand="United States"
          />
          <div className="featured-country-three">
            <div className="featured-country-three-element">
              <div className="wrapper-link-flag-of-canada">
                <img
                  className="link-flag-of-canadawebp"
                  loading="lazy"
                  alt=""
                  src="/link--flagofcanadawebp@2x.png"
                />
              </div>
              <div className="featured-country-three-info">
                <div className="canada">Canada</div>
              </div>
              <div className="featured-country-three-info1">
                <div className="gb5">$4 / 1GB</div>
              </div>
            </div>
          </div>
          <CountryCards1
            linkFlagOfMoroccowebp="/link--flagofindiawebp@2x.png"
            morocco="India"
            gB="$20 / 10GB"
            propWidth="35px"
            propMinWidth="35px"
            propMinWidth1="95px"
          />
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
