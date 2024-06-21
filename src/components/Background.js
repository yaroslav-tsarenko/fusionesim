import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <section className={`background5 ${className}`}>
      <div className="available-title">
        <h1 className="available-in">Available in</h1>
      </div>
      <div className="flags">
        <div className="link">
          <img
            className="flag-of-albania-150x150webp-icon"
            loading="lazy"
            alt=""
            src="/flagofalbania150x150webp@2x.png"
          />
          <div className="albania">Albania</div>
        </div>
        <div className="link1">
          <img
            className="flag-of-andorra-150x150webp-icon"
            alt=""
            src="/flagofandorra150x150webp@2x.png"
          />
          <div className="andorra">Andorra</div>
        </div>
        <div className="link2">
          <img
            className="flag-of-armenia-150x150webp-icon"
            alt=""
            src="/flagofarmenia150x150webp@2x.png"
          />
          <div className="armenia">Armenia</div>
        </div>
        <Button
          className="link3"
          startIcon={
            <img
              width="25px"
              height="25px"
              src="/flagofaustria150x150webp.png"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#00a11a",
            fontSize: "15",
            background: "#f8fcff",
            borderRadius: "10px",
            "&:hover": { background: "#f8fcff" },
            width: 200,
            height: 59,
          }}
        >
          Austria
        </Button>
        <div className="link4">
          <div className="bosnia-flag">
            <img
              className="flag-of-bosnia-herzegovina-150-icon"
              alt=""
              src="/flagofbosniaherzegovina150x150webp@2x.png"
            />
          </div>
          <div className="bosnia-and-herzegovina-container">
            <p className="bosnia-and">Bosnia and</p>
            <p className="herzegovina">Herzegovina</p>
          </div>
        </div>
        <div className="link5">
          <img
            className="flag-of-belarus-150x150webp-icon"
            alt=""
            src="/flagofbelarus150x150webp@2x.png"
          />
          <div className="belarus">Belarus</div>
        </div>
        <div className="link6">
          <img
            className="flag-of-belgium-150x150webp-icon"
            alt=""
            src="/flagofbelgium150x150webp@2x.png"
          />
          <div className="belgium">Belgium</div>
        </div>
        <div className="link7">
          <img
            className="flag-of-bulgariasvg-icon"
            loading="lazy"
            alt=""
            src="/flagofbulgariasvg.svg"
          />
          <div className="bulgaria">Bulgaria</div>
        </div>
        <div className="link8">
          <img
            className="flag-of-croatia-150x150webp-icon"
            alt=""
            src="/flagofcroatia150x150webp@2x.png"
          />
          <div className="croatia">Croatia</div>
        </div>
        <div className="link9">
          <img
            className="flag-of-cyprus-150x150webp-icon"
            alt=""
            src="/flagofcyprus150x150webp@2x.png"
          />
          <div className="cyprus">Cyprus</div>
        </div>
        <Button
          className="link10"
          startIcon={
            <img
              width="25px"
              height="25px"
              src="/czechrepublicflag150x150webp.png"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#00a11a",
            fontSize: "15",
            background: "#f8fcff",
            borderRadius: "10px",
            "&:hover": { background: "#f8fcff" },
            width: 200,
            height: 59,
          }}
        >
          Czech Republic
        </Button>
        <div className="link11">
          <img
            className="flag-of-denmark-150x150webp-icon"
            alt=""
            src="/flagofdenmark150x150webp@2x.png"
          />
          <div className="denmark">Denmark</div>
        </div>
        <div className="link12">
          <img
            className="flag-of-estonia-150x150webp-icon"
            alt=""
            src="/flagofestonia150x150webp@2x.png"
          />
          <div className="estonia">Estonia</div>
        </div>
        <div className="link13">
          <img
            className="flag-of-finland-150x150webp-icon"
            alt=""
            src="/flagoffinland150x150webp@2x.png"
          />
          <div className="finland">Finland</div>
        </div>
        <div className="link14">
          <img
            className="flag-of-france-150x150webp-icon"
            loading="lazy"
            alt=""
            src="/flagoffrance150x150webp@2x.png"
          />
          <div className="france">France</div>
        </div>
        <div className="link15">
          <img
            className="flag-of-georgia-150x150webp-icon"
            alt=""
            src="/flagofgeorgia150x150webp@2x.png"
          />
          <div className="georgia">Georgia</div>
        </div>
        <div className="link16">
          <img
            className="flag-of-germany-150x150webp-icon"
            alt=""
            src="/flagofgermany150x150webp@2x.png"
          />
          <div className="germany">Germany</div>
        </div>
        <div className="link17">
          <img
            className="flag-of-greece-150x150webp-icon"
            alt=""
            src="/flagofgreece150x150webp@2x.png"
          />
          <div className="greece">Greece</div>
        </div>
        <div className="link18">
          <img
            className="flag-of-hungary-150x150webp-icon"
            alt=""
            src="/flagofhungary150x150webp@2x.png"
          />
          <div className="hungary">Hungary</div>
        </div>
        <div className="link19">
          <img
            className="flag-of-iceland-150x150webp-icon"
            alt=""
            src="/flagoficeland150x150webp@2x.png"
          />
          <div className="iceland">Iceland</div>
        </div>
        <div className="link20">
          <img
            className="flag-of-ireland-150x150webp-icon"
            alt=""
            src="/flagofireland150x150webp@2x.png"
          />
          <div className="ireland">Ireland</div>
        </div>
        <div className="link21">
          <img
            className="flag-of-italy-1-150x150webp-icon"
            loading="lazy"
            alt=""
            src="/flagofitaly1150x150webp@2x.png"
          />
          <div className="italy">Italy</div>
        </div>
        <div className="link22">
          <img
            className="flag-of-kosovo-150x150webp-icon"
            alt=""
            src="/flagofkosovo150x150webp@2x.png"
          />
          <div className="kosovo">Kosovo</div>
        </div>
        <div className="link23">
          <input className="flag-of-latvia-150x150webp" type="checkbox" />
          <div className="latvia">Latvia</div>
        </div>
        <div className="link24">
          <img
            className="flag-of-liechtenstein-150x150-icon"
            alt=""
            src="/flagofliechtenstein150x150webp@2x.png"
          />
          <div className="liechtenstein">Liechtenstein</div>
        </div>
        <div className="link25">
          <img className="ltsvg-icon" alt="" src="/ltsvg.svg" />
          <div className="lithuania">Lithuania</div>
        </div>
        <Button
          className="link26"
          startIcon={
            <img
              width="25px"
              height="25px"
              src="/flagofluxembourg150x150webp.png"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#00a11a",
            fontSize: "15",
            background: "#f8fcff",
            borderRadius: "10px",
            "&:hover": { background: "#f8fcff" },
            width: 200,
            height: 59,
          }}
        >
          Luxembourg
        </Button>
        <div className="link27">
          <img
            className="flag-of-macedonia-150x150webp-icon"
            alt=""
            src="/flagofmacedonia150x150webp@2x.png"
          />
          <div className="macedonia">Macedonia</div>
        </div>
        <div className="link28">
          <img
            className="flag-of-malta-150x150webp-icon"
            loading="lazy"
            alt=""
            src="/flagofmalta150x150webp@2x.png"
          />
          <div className="malta">Malta</div>
        </div>
        <div className="link29">
          <img
            className="flag-of-moldova-150x150webp-icon"
            alt=""
            src="/flagofmoldova150x150webp@2x.png"
          />
          <div className="moldova">Moldova</div>
        </div>
        <div className="link30">
          <img
            className="flag-of-monaco-150x150webp-icon"
            alt=""
            src="/flagofmonaco150x150webp@2x.png"
          />
          <div className="monaco">Monaco</div>
        </div>
        <div className="link31">
          <img
            className="flag-of-montenegro-150x150web-icon"
            alt=""
            src="/flagofmontenegro150x150webp@2x.png"
          />
          <div className="montenegro">Montenegro</div>
        </div>
        <Button
          className="link32"
          startIcon={
            <img
              width="25px"
              height="25px"
              src="/flagofnetherlands150x150webp.png"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#00a11a",
            fontSize: "15",
            background: "#f8fcff",
            borderRadius: "10px",
            "&:hover": { background: "#f8fcff" },
            width: 200,
            height: 59,
          }}
        >
          Netherlands
        </Button>
        <div className="link33">
          <img
            className="flag-of-norway-150x150webp-icon"
            alt=""
            src="/flagofnorway150x150webp@2x.png"
          />
          <div className="norway">Norway</div>
        </div>
        <div className="link34">
          <img
            className="flag-of-poland-150x150webp-icon"
            alt=""
            src="/flagofpoland150x150webp@2x.png"
          />
          <div className="poland">Poland</div>
        </div>
        <div className="link35">
          <img
            className="flag-of-portugal-150x150webp-icon"
            loading="lazy"
            alt=""
            src="/flagofportugal150x150webp@2x.png"
          />
          <div className="portugal">Portugal</div>
        </div>
        <div className="link36">
          <img
            className="romania-150x150webp-icon"
            alt=""
            src="/romania150x150webp@2x.png"
          />
          <div className="romania">Romania</div>
        </div>
        <div className="link37">
          <img
            className="flag-of-serbia-150x150webp-icon"
            alt=""
            src="/flagofserbia150x150webp@2x.png"
          />
          <div className="serbia">Serbia</div>
        </div>
        <div className="link38">
          <img className="sksvg-icon" alt="" src="/sksvg.svg" />
          <div className="slovakia">Slovakia</div>
        </div>
        <div className="link39">
          <img
            className="flag-of-slovenia-150x150webp-icon"
            alt=""
            src="/flagofslovenia150x150webp@2x.png"
          />
          <div className="slovenia">Slovenia</div>
        </div>
        <div className="link40">
          <img
            className="flag-of-spain-150x150webp-icon"
            alt=""
            src="/flagofspain150x150webp@2x.png"
          />
          <div className="spain">Spain</div>
        </div>
        <div className="link41">
          <img
            className="flag-of-sweden-150x150webp-icon"
            alt=""
            src="/flagofsweden150x150webp@2x.png"
          />
          <div className="sweden">Sweden</div>
        </div>
        <Button
          className="link42"
          startIcon={
            <img
              width="25px"
              height="25px"
              src="/flagofswitzerland150x150webp.png"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#00a11a",
            fontSize: "15",
            background: "#f8fcff",
            borderRadius: "10px",
            "&:hover": { background: "#f8fcff" },
            width: 200,
            height: 59,
          }}
        >
          Switzerland
        </Button>
        <div className="link43">
          <img
            className="flag-of-turkey-150x150webp-icon"
            alt=""
            src="/flagofturkey150x150webp@2x.png"
          />
          <div className="turkey">Turkey</div>
        </div>
        <div className="link44">
          <img
            className="flag-of-ukraine-150x150webp-icon"
            alt=""
            src="/flagofukraine150x150webp@2x.png"
          />
          <div className="ukraine">Ukraine</div>
        </div>
        <Button
          className="link45"
          startIcon={
            <img
              width="25px"
              height="25px"
              src="/unitedkingdomflag150x150webp.png"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#00a11a",
            fontSize: "15",
            background: "#f8fcff",
            borderRadius: "10px",
            "&:hover": { background: "#f8fcff" },
            width: 200,
            height: 59,
          }}
        >
          United Kingdom
        </Button>
      </div>
    </section>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
