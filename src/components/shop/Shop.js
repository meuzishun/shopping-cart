import React from 'react';
import ProductCard from '../productCard/ProductCard';

function Shop(props) {
  return (
    <div>
      {console.log('shop rendered...')}
      {props.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Shop;
