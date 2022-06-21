import React from 'react';

function ProductCard(props) {
  const { product, addProductClick } = props;
  const { name, description, price } = product;

  const handleAddProductClick = () => {
    addProductClick(product);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handleAddProductClick}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
