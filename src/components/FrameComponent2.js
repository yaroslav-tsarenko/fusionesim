import BestSellerCardRows from "./BestSellerCardRows";
import DestinationItems from "./DestinationItems";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`best-seller-content-wrapper ${className}`}>
      <div className="best-seller-content">
        <div className="best-seller-backgrounds">
          <div className="background1">
            <div className="region-borders">
              <button className="backgroundborder3">
                <div className="best-sellers">Best Sellers</div>
              </button>
              <div className="border">
                <div className="local">Local</div>
              </div>
              <div className="border1">
                <div className="africa">Africa</div>
              </div>
              <button className="border2">
                <div className="central-america">Central America</div>
              </button>
              <div className="border3">
                <div className="central-asia">Central Asia</div>
              </div>
              <div className="border4">
                <div className="europe">Europe</div>
              </div>
              <div className="border5">
                <div className="middle-east">MIddle East</div>
              </div>
            </div>
            <div className="region-borders-two-wrapper">
              <div className="region-borders-two">
                <button className="border6">
                  <div className="north-america">North America</div>
                </button>
                <div className="border7">
                  <div className="oceania">Oceania</div>
                </div>
                <button className="border8">
                  <div className="south-america">South America</div>
                </button>
                <button className="border9">
                  <div className="south-east-asia">South East Asia</div>
                </button>
                <div className="border10">
                  <div className="caribbean">Caribbean</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-icon"
          loading="lazy"
          alt=""
          src="/background@2x.png"
        />
        <div className="background2">
          <div className="best-seller-cards">
            <div className="best-seller-card-rows1">
              <div className="best-seller-card-items">
                <div className="best-seller-card-elements">
                  <img
                    className="flaf-eastasiajpg-icon"
                    alt=""
                    src="/flaf-eastasiajpg@2x.png"
                  />
                  <div className="best-seller-locations">
                    <div className="far-east1">FAR EAST</div>
                  </div>
                </div>
                <div className="best-seller-placeholders">
                  <b className="b1">$4.00</b>
                </div>
              </div>
              <div className="best-sellers-barjpg2" />
              <div className="best-seller-infos">
                <div className="paragraphverticalborder4">
                  <div className="best-seller-plan-details">
                    <div className="gb8">1GB</div>
                  </div>
                  <div className="data-plan2">DATA PLAN</div>
                </div>
                <div className="best-seller-country-counts">
                  <div className="paragraphverticalborder5">
                    <div className="best-seller-country-amounts">
                      <div className="days2">7 Days</div>
                    </div>
                    <div className="duration2">DURATION</div>
                  </div>
                </div>
                <div className="best-seller-buttons">
                  <div className="wrapper2">
                    <div className="div4">6</div>
                  </div>
                  <div className="countries3">COUNTRIES</div>
                </div>
              </div>
              <div className="button4">
                <img className="tag-icon4" alt="" src="/tag-icon.svg" />
                <div className="button5">GET A PLAN FOR $4.00</div>
                <img className="tag-icon5" alt="" src="/tag-icon.svg" />
              </div>
            </div>
            <BestSellerCardRows
              flagOfMoroccowebp="/flagofmoroccowebp@2x.png"
              mOROCCO="MOROCCO"
            />
            <BestSellerCardRows
              flagOfMoroccowebp="/flagofcuracaowebp@2x.png"
              mOROCCO="CURACAO"
              propFlex="1"
              propMinWidth="267px"
              propWidth="unset"
              propLineHeight="22px"
              propMinWidth1="90px"
              propDisplay="inline-block"
              propWidth1="40px"
              propPadding="0px 0px 17.2px"
              propDebugCommit="unset"
              propDebugCommit1="unset"
            />
          </div>
          <div className="popular-destinations">
            <div className="destination-grid">
              <DestinationItems
                dubaiAbuDhabiUAEFLAGwebp="/dubaiabudhabiuaeflagwebp@2x.png"
                dUBAI="DUBAI"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/lksvg.svg"
                mOROCCO="SRI LANKA"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="120%"
                propMinWidth1="92px"
                propDisplay="inline-block"
                propWidth1="unset"
                propPadding="0px 0px 17.2px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/flagofsouthafricawebp@2x.png"
                mOROCCO="SOUTH AFRICA"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="22px"
                propMinWidth1="unset"
                propDisplay="unset"
                propWidth1="40px"
                propPadding="0px 0px 17.2px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <DestinationItems
                dubaiAbuDhabiUAEFLAGwebp="/flagofnewzealandwebp@2x.png"
                dUBAI="NEW ZEALAND"
                propLineHeight="120%"
                propMinWidth="129px"
                propPadding="0px 0px 17.2px"
                propWidth="unset"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/flagofegypt150x150webp@2x.png"
                mOROCCO="EGYPT"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="22px"
                propMinWidth1="58px"
                propDisplay="inline-block"
                propWidth1="unset"
                propPadding="0px 0px 17.2px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/flagofusa1webp@2x.png"
                mOROCCO="UNITED STATES"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="22px"
                propMinWidth1="unset"
                propDisplay="unset"
                propWidth1="40px"
                propPadding="0px 0px 17.2px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
