import React from 'react';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Cart />
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
