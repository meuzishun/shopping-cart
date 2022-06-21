import React from 'react';

function ProductCard(props) {
  const { product, addProductClick } = props;
  const { name, description, price } = product;

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>${price}</p>
      <button
        onClick={() => {
          addProductClick(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
