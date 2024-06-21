import ResponsiveNavbar1 from "../components/ResponsiveNavbar1";
import HelpCenter from "../components/HelpCenter";
import Footer1 from "../components/Footer1";
import "./HelpCenterPage.css";

const HelpCenterPage = () => {
  return (
    <div className="helpcenterpage">
      <ResponsiveNavbar1 />
      <section className="content">
        <HelpCenter />
      </section>
      <Footer1
        group1000006258="/group-1000006258-11@2x.png"
        propWidth="1680px"
        propAlignSelf="stretch"
        propWidth1="unset"
        propOverflowX="unset"
      />
    </div>
  );
};

export default HelpCenterPage;
