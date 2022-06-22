import React from 'react';
import styles from './QuantityWidget.module.css';

function QuantityWidget(props) {
  const { item, editItemQuantity } = props;
  const handleChange = (e) => {
    const newQuantity =
      e.target.textContent === '-' ? item.quantity - 1 : item.quantity + 1;
    editItemQuantity(item, newQuantity);
  };

  return (
    <div className={styles.widget}>
      <button className={styles.widgetBtn} onClick={handleChange}>
        -
      </button>
      <p className={styles.itemCount}>{item.quantity}</p>
      <button className={styles.widgetBtn} onClick={handleChange}>
        +
      </button>
    </div>
  );
}

export default QuantityWidget;
