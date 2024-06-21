import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import AppInstallContent from "../components/AppInstallContent";
import FrameComponent from "../components/FrameComponent";
import Group2 from "../components/Group2";
import Group1 from "../components/Group1";
import Group from "../components/Group";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <ResponsiveNavbar />
      <Hero />
      <Content />
      <FrameComponent2 />
      <FrameComponent1
        group1000006258="/group-1000006258-1@2x.png"
        group10000062581="/group-1000006258-2@2x.png"
        group10000062582="/group-1000006258-3@2x.png"
      />
      <section className="app-install-content-parent">
        <AppInstallContent />
        <FrameComponent />
      </section>
      <section className="group-2-4-parent">
        <Group2 />
        <Group1 />
        <Group />
      </section>
      <Footer group1000006258="/group-1000006258-4@2x.png" />
    </div>
  );
};

export default HomePage;
