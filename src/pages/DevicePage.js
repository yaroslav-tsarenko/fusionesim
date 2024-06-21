import Main from "../components/Main";
import ESimInfo from "../components/ESimInfo";
import SetupInfo from "../components/SetupInfo";
import Footer1 from "../components/Footer1";
import "./DevicePage.css";

const DevicePage = () => {
  return (
    <div className="devicepage">
      <Main />
      <main className="content">
        <section className="e-sim-info-parent">
          <ESimInfo />
          <SetupInfo />
          <div className="background" />
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default DevicePage;
