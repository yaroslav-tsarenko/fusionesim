import ResponsiveNavbar1 from "../components/ResponsiveNavbar1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./GlobalEsimPage.css";

const GlobalEsimPage = () => {
  return (
    <div className="globalesimpage">
      <ResponsiveNavbar1 />
      <section className="heading-1-articles-parent">
        <h1 className="heading-11">Articles</h1>
        <div className="frame-parent">
          <FrameComponent2 />
          <FrameComponent />
        </div>
      </section>
      <Footer1 group1000006258="/group-1000006258-1@2x.png" />
    </div>
  );
};

export default GlobalEsimPage;
