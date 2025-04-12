import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import IceCreamOfTheDay from './components/IceCreamOfTheDay';
import LoginSignup from './components/LoginSignup';
import ContactUs from './components/ContactUs'; // ✅ Make sure the file name and path are correct

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<LoginSignup />} />
        <Route path="/offers" element={<IceCreamOfTheDay />} />
        <Route path="/contact" element={<ContactUs />} /> {/* ✅ Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
