import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import "./ICCIDPage.css";

const ICCIDPage = () => {
  return (
    <div className="iccidpage">
      <ResponsiveNavbar />
      <main className="section">
        <Section />
      </main>
      <Footer group1000006258="/group-1000006258-11@2x.png" />
    </div>
  );
};

export default ICCIDPage;
