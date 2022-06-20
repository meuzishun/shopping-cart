import React from 'react';
import CartItem from '../cartItem/CartItem';

function Cart() {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <CartItem />
      </div>
      <p>total price</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
