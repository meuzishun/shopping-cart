import React from 'react';
import ProductCard from '../productCard/ProductCard';
import styles from './Shop.module.css';

function Shop(props) {
  const { products, addProductClick } = props;

  return (
    <div className={styles.shop}>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          addProductClick={addProductClick}
        />
      ))}
      {console.log('Shop has rendered...')}
    </div>
  );
}

export default Shop;
