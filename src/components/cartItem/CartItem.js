import React from 'react';
import { formatPriceText } from '../../utilities/formatPriceText';
import QuantityWidget from '../quantityWidget/QuantityWidget';
import styles from './CartItem.module.css';

function CartItem(props) {
  const { item, editItemQuantity } = props;
  const { name, imgUrl, description, price } = item;

  return (
    <div className={styles.item}>
      <h4 className={styles.title}>{name}</h4>
      <img src={imgUrl} alt={description} />
      <p className={styles.price}>{formatPriceText(price)}</p>
      <QuantityWidget item={item} editItemQuantity={editItemQuantity} />
    </div>
  );
}

export default CartItem;
