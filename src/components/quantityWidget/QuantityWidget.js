import React from 'react';

function QuantityWidget(props) {
  const { item, editItemQuantity } = props;
  const handleChange = (e) => {
    const newQuantity =
      e.target.textContent === '-' ? item.quantity - 1 : item.quantity + 1;
    editItemQuantity(item, newQuantity);
  };

  return (
    <div>
      <button onClick={handleChange}>-</button>
      <p>{item.quantity}</p>
      <button onClick={handleChange}>+</button>
    </div>
  );
}

export default QuantityWidget;
