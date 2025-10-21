import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { Blogs } from "./components/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE (default) */}
        <Route path="/" element={
          <>
            <Home />
            <AboutUs />
            <Products />
            <Blogs />
          </>
        } />

        {/* DYNAMIC PRODUCT PAGE */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
