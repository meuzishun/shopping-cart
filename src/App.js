import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Home from './components/home/Home.js';
import Shop from './components/shop/Shop.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Cart />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
