import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard(props) {
  const { product, addProductClick } = props;
  const { name, description, price } = product;

  const handleAddProductClick = () => {
    addProductClick(product);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description} data-testid='productDescription'>
        {description}
      </p>
      <p className={styles.price} data-testid='productPrice'>
        ${price}
      </p>
      <button className={styles.addBtn} onClick={handleAddProductClick}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
