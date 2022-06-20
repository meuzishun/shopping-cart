import React from 'react';
import { useState } from 'react';
import uniqid from 'uniqid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Home from './components/home/Home.js';
import Shop from './components/shop/Shop.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import './App.css';

function App() {
  const products = [
    {
      name: 'item 1',
      description: 'it is cool',
      price: 1.23,
      id: uniqid(),
    },
    {
      name: 'item 2',
      description: 'it is also cool',
      price: 4.56,
      id: uniqid(),
    },
  ];

  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Cart />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop products={products} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
