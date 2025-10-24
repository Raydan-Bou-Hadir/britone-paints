import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { Blogs } from './components/Blogs';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <AboutUs />
              <Products />
              <Blogs />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
