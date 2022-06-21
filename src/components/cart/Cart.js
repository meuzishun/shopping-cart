import React from 'react';
import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';

function Cart(props) {
  const { cartItems, editItemQuantity, totalPrice, checkout } = props;

  return (
    <div className={styles.cart}>
      {/* {console.log('cart rendered...')} */}
      <h2>shopping cart</h2>
      {/* <div className={styles.items}> */}
      {/*TODO - this encap breaks the func */}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          editItemQuantity={editItemQuantity}
        />
      ))}
      {/* </div> */}
      <p>total price: ${totalPrice}</p>
      <button onClick={checkout}>checkout</button>
      {console.log('Cart has rendered...')}
    </div>
  );
}

export default Cart;
