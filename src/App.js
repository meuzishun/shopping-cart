import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Home from './components/home/Home.js';
import Shop from './components/shop/Shop.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import styles from './App.module.css';
import products from './products';
console.log(JSON.parse(products));

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const getCartItemIndex = (item) => {
    return cartItems.findIndex((product) => product.id === item.id);
  };

  const addItemToCart = (item) => {
    setCartItems(
      cartItems.concat(
        Object.assign(
          {
            quantity: 1,
          },
          item
        )
      )
    );
  };

  const editItemQuantity = (item, newQuantity) => {
    const index = getCartItemIndex(item);
    const copiedCartItems = [...cartItems];
    if (newQuantity === 0) {
      copiedCartItems.splice(index, 1);
    } else {
      copiedCartItems[index].quantity = newQuantity;
    }
    setCartItems(copiedCartItems);
  };

  const handleAddProductClick = (item) => {
    const index = getCartItemIndex(item);
    if (index === -1) {
      addItemToCart(item);
    } else {
      console.log(item);
      const newQuantity = cartItems[index].quantity + 1;
      editItemQuantity(item, newQuantity);
    }
  };

  const handleCartCheckout = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (prev, curr) =>
        Math.round((prev + curr.quantity * curr.price) * 100) / 100,
      0
    );
  };

  const getTotalItemCount = () => {
    return cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
  };

  const toggleCartView = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={styles.container} data-testid='app'>
      <BrowserRouter>
        <Header
          itemCount={getTotalItemCount()}
          toggleCartView={toggleCartView}
        />
        {showCart ? (
          <Cart
            cartItems={cartItems}
            editItemQuantity={editItemQuantity}
            totalPrice={getTotalPrice()}
            checkout={handleCartCheckout}
          />
        ) : null}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={
              <Shop
                products={JSON.parse(products)}
                addProductClick={handleAddProductClick}
              />
            }
          />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* {console.log('App has rendered...')} */}
    </div>
  );
}

export default App;
