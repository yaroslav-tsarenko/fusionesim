import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Hero1 from "../components/Hero1";
import Content1 from "../components/Content1";
import Group2 from "../components/Group2";
import Group1 from "../components/Group1";
import Group from "../components/Group";
import Footer from "../components/Footer";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <ResponsiveNavbar />
      <Hero1 />
      <Content1 />
      <section className="copyright-info">
        <Group2 />
        <Group1 />
        <Group />
      </section>
      <Footer group1000006258="/group-1000006258-41@2x.png" />
    </div>
  );
};

export default ProductListingPage;
