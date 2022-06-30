import React from 'react';
import { formatPriceText } from '../../utilities/formatPriceText';
import styles from './ProductCard.module.css';

function ProductCard(props) {
  const { product, addProductClick } = props;
  const { name, imgUrl, description, price } = product;

  const handleAddProductClick = () => {
    addProductClick(product);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <img src={imgUrl} alt={description} className={styles.product_img} />
      <p className={styles.price} data-testid='productPrice'>
        {formatPriceText(price)}
      </p>
      <button className={styles.addBtn} onClick={handleAddProductClick}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
