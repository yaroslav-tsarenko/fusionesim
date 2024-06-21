import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Partnership from "../components/Partnership";
import Footer from "../components/Footer";
import "./PartnerPage.css";

const PartnerPage = () => {
  return (
    <div className="partnerpage">
      <ResponsiveNavbar />
      <section className="hero">
        <div className="collaboration">
          <div className="collaboration-content">
            <h1 className="heading-1">Lets Collaborate.</h1>
            <div className="looking-to-grow">
              Looking to grow your business and join the innovative eSIM
              market?Join our affiliate program and become an authorize
              Fusionwavesim partner! Our Affiliate program is a great way for
              you to generate revenue, if you are a:
            </div>
          </div>
          <Partnership />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PartnerPage;
