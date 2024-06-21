import { Button } from "@mui/material";
import BestSellerCardRows from "./BestSellerCardRows";
import DestinationItems from "./DestinationItems";
import PropTypes from "prop-types";
import "./Bestsellers.css";

const Bestsellers = ({ className = "" }) => {
  return (
    <div className={`bestsellers ${className}`}>
      <div className="featured">
        <div className="link-globalesim">{`Fusionwavesim > Local`}</div>
        <div className="background4">
          <div className="cards-container">
            <div className="card-row-one">
              <div className="card-items-one-parent">
                <div className="card-items-one">
                  <img
                    className="flaf-eastasiajpg-icon1"
                    loading="lazy"
                    alt=""
                    src="/flaf-eastasiajpg@2x.png"
                  />
                  <div className="locations-one">
                    <div className="far-east2">FAR EAST</div>
                  </div>
                </div>
                <div className="spacer-one">
                  <b className="placeholder-one">$4.00</b>
                </div>
              </div>
              <div className="best-sellers-barjpg3" />
              <div className="details-one">
                <div className="paragraphverticalborder6">
                  <div className="details-row-one">
                    <div className="gb9">1GB</div>
                  </div>
                  <div className="data-plan3">DATA PLAN</div>
                </div>
                <div className="countries-one">
                  <div className="paragraphverticalborder7">
                    <div className="countries-days-one">
                      <div className="days3">7 Days</div>
                    </div>
                    <div className="duration3">DURATION</div>
                  </div>
                </div>
                <div className="countries-placeholder-one">
                  <div className="countries-spacer-one">
                    <div className="countries-inner-spacer">6</div>
                  </div>
                  <div className="countries4">COUNTRIES</div>
                </div>
              </div>
              <div className="button6">
                <img className="tag-icon6" alt="" src="/tag-icon.svg" />
                <div className="button7">GET A PLAN FOR $4.00</div>
                <img className="tag-icon7" alt="" src="/tag-icon.svg" />
              </div>
            </div>
            <BestSellerCardRows
              flagOfMoroccowebp="/flagofmoroccowebp@2x.png"
              mOROCCO="MOROCCO"
              propFlex="1"
              propMinWidth="267px"
              propWidth="unset"
              propLineHeight="22px"
              propMinWidth1="97px"
              propDisplay="inline-block"
              propWidth1="40px"
              propPadding="0px 0px 17.2px"
              propDebugCommit="unset"
              propDebugCommit1="unset"
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
          <div className="more">
            <div className="cards-two">
              <DestinationItems
                dubaiAbuDhabiUAEFLAGwebp="/dubaiabudhabiuaeflagwebp1@2x.png"
                dUBAI="DUBAI"
                propLineHeight="22px"
                propMinWidth="55px"
                propPadding="17.2px 0px 0px"
                propWidth="40px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
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
                propWidth1="40px"
                propPadding="17.2px 0px 0px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/flagofsouthafricawebp1@2x.png"
                mOROCCO="SOUTH AFRICA"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="22px"
                propMinWidth1="unset"
                propDisplay="unset"
                propWidth1="40px"
                propPadding="17.2px 0px 0px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <DestinationItems
                dubaiAbuDhabiUAEFLAGwebp="/flagofnewzealandwebp1@2x.png"
                dUBAI="NEW ZEALAND"
                propLineHeight="120%"
                propMinWidth="129px"
                propPadding="17.2px 0px 0px"
                propWidth="40px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/flagofegypt150x150webp1@2x.png"
                mOROCCO="EGYPT"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="22px"
                propMinWidth1="58px"
                propDisplay="inline-block"
                propWidth1="40px"
                propPadding="17.2px 0px 0px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <BestSellerCardRows
                flagOfMoroccowebp="/flagofusa1webp1@2x.png"
                mOROCCO="UNITED STATES"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="356px"
                propLineHeight="22px"
                propMinWidth1="unset"
                propDisplay="unset"
                propWidth1="40px"
                propPadding="17.2px 0px 0px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
          </div>
        </div>
        <div className="show-more">
          <Button
            className="button8"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              background: "#00a11a",
              borderRadius: "5px",
              "&:hover": { background: "#00a11a" },
              width: 314.6,
              height: 32.5,
            }}
          >
            SHOW MORE COUNTRIES
          </Button>
        </div>
      </div>
    </div>
  );
};

Bestsellers.propTypes = {
  className: PropTypes.string,
};

export default Bestsellers;
