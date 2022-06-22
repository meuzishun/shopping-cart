import React from 'react';
import QuantityWidget from '../quantityWidget/QuantityWidget';
import styles from './CartItem.module.css';

function CartItem(props) {
  const { item, editItemQuantity } = props;
  const { name, description, price } = item;

  return (
    <div className={styles.item}>
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <QuantityWidget item={item} editItemQuantity={editItemQuantity} />
    </div>
  );
}

export default CartItem;
