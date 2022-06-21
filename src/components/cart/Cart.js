import React from 'react';
import CartItem from '../cartItem/CartItem';

function Cart(props) {
  const { cartItems, editItemQuantity, totalPrice, checkout } = props;

  return (
    <div>
      {/* {console.log('cart rendered...')} */}
      <h2>shopping cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          editItemQuantity={editItemQuantity}
        />
      ))}
      <p>total price: ${totalPrice}</p>
      <button onClick={checkout}>checkout</button>
      {console.log('Cart has rendered...')}
    </div>
  );
}

export default Cart;
