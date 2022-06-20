import React from 'react';

function ProductCard(props) {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
