import ResponsiveNavbar1 from "../components/ResponsiveNavbar1";
import Articles from "../components/Articles";
import Footer1 from "../components/Footer1";
import "./DisctionaryPage.css";

const DisctionaryPage = () => {
  return (
    <div className="disctionarypage">
      <ResponsiveNavbar1 />
      <section className="main-content">
        <div className="content-header">
          <div className="header-image">
            <div className="dictionary-image">
              <div className="dictionary-header">
                <div className="dictionary-link">
                  <div className="link-globalesim">{`Fusionwavesim > eSIM Dictionary`}</div>
                </div>
                <h1 className="heading-12">eSIM Dictionary</h1>
              </div>
            </div>
            <img
              className="esim-dictionaryjpg-icon"
              loading="lazy"
              alt=""
              src="/esimdictionaryjpg@2x.png"
            />
          </div>
          <Articles />
        </div>
      </section>
      <Footer1
        group1000006258="/group-1000006258-13@2x.png"
        propWidth="unset"
        propAlignSelf="unset"
        propWidth1="1680px"
        propOverflowX="auto"
      />
    </div>
  );
};

export default DisctionaryPage;
