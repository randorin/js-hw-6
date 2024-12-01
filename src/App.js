import React from 'react';
import ProductCard from './productcard';

const App = () => {
  const product = {
    name: 'Xerofang Vandal (Valorant)',
    image: process.env.PUBLIC_URL + './xerofang.jpg',
    price: 18.68,
    isAvailable: true,
  };

  return (
    <div>
      <ProductCard
        productName={product.name}
        productImage={product.image}
        productPrice={product.price}
        availabilityStatus={product.isAvailable}
      />
    </div>
  );
};

export default App;
