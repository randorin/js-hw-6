import React from 'react';

const ProductCard = ({ productName, productImage, productPrice, availabilityStatus }) => {
  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">${productPrice}</p>
      <p className={`product-availability ${availabilityStatus ? 'in-stock' : 'out-of-stock'}`}>
        {availabilityStatus ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
