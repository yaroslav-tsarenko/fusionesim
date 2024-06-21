import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Hero from "../components/Hero";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="aboutuspage">
      <ResponsiveNavbar />
      <Hero />
      <section className="about-content-wrapper">
        <AboutContent />
      </section>
      <Footer group1000006258="/group-1000006258-1@2x.png" />
    </div>
  );
};

export default AboutUsPage;
