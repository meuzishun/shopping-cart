import React from 'react';
import ProductCard from '../productCard/ProductCard';

function Shop(props) {
  const { products, addProductClick } = props;

  return (
    <div>
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
