import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutCartPage from "./pages/CheckoutCartPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/productlistingpage":
        title = "";
        metaDescription = "";
        break;
      case "/productpage":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutpage":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutcartpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productlistingpage" element={<ProductListingPage />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/checkoutpage" element={<CheckoutPage />} />
      <Route path="/checkoutcartpage" element={<CheckoutCartPage />} />
    </Routes>
  );
}
export default App;
