import React from 'react';
import QuantityWidget from '../quantityWidget/QuantityWidget';

function CartItem(props) {
  const { item, editItemQuantity } = props;
  const { name, description, price } = item;
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <QuantityWidget item={item} editItemQuantity={editItemQuantity} />
    </div>
  );
}

export default CartItem;
