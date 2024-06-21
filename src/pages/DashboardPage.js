import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer2 from "../components/Footer2";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboardpage">
      <FrameComponent1 />
      <FrameComponent />
      <Footer2 />
    </div>
  );
};

export default DashboardPage;
