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
import styles from './App.module.css';

//* Something strange is happening with uniqid() and setCartItems... the products need to be declared outside of the App.
//TODO - try putting the products in a separate json file and see if fetch can be used to emulate querying a server.
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
  {
    name: 'item 3',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 4',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 5',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 6',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 7',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 8',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 9',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 10',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 11',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 12',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 13',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 14',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 15',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header itemCount={getTotalItemCount()} />
        <Cart
          cartItems={cartItems}
          editItemQuantity={editItemQuantity}
          totalPrice={getTotalPrice()}
          checkout={handleCartCheckout}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={
              <Shop
                products={products}
                addProductClick={handleAddProductClick}
              />
            }
          />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {console.log('App has rendered...')}
    </div>
  );
}

export default App;
