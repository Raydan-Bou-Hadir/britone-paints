import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { Blogs } from './components/Blogs';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE (default) */}
        <Route
          path='/'
          element={
            <>
              <Home />
              <AboutUs />
              <Products />
              <Blogs />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* DYNAMIC PRODUCT PAGE */}
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
