import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import NavbarLayout from "./components/layout/NavbarLayout";

// Import page components (will create these next)
import InformationPage from "./components/pages/InformationPage";
import LensCategoriesPage from "./components/pages/LensCategoriesPage";
import LensCarePage from "./components/pages/LensCarePage";
import ProductsPage from "./components/pages/ProductsPage";
import ContactPage from "./components/pages/ContactPage";
import LensTypePage from "./components/pages/LensTypePage";
import StyleGuidePage from "./components/pages/StyleGuidePage";

function App() {
  return (
    <Router>
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/lens-categories" element={<LensCategoriesPage />} />
        <Route path="/lens-care" element={<LensCarePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/lens/:category/:type" element={<LensTypePage />} />
        <Route path="/style-guide" element={<StyleGuidePage />} />
      </Routes>
    </Router>
  );
}

export default App;