import React from "react";
import './App.css';
import ProductCard from "./productcard";
import xerofang from './images/xerofang.jpg';
import araxys from './images/araxys.jpg';
import mystbloom from './images/mystbloom.jpg';
import kuronami from './images/kuronami.jpg';

const App = () => {
  const skins = [
    {
      id: 1, 
      name: "Xerofang Ghost", 
      image: xerofang, 
      price: 19.99, 
      availability: "OUT OF STOCK"
    },
    {
      id: 2, 
      name: "Araxys Vandal", 
      image: araxys, 
      price: 21.99, 
      availability: "In Stock"
    },
    {
      id: 3, 
      name: "Mystbloom Operator", 
      image: mystbloom, 
      price: 22.99, 
      availability: "In Stock"
    },
    {
      id: 4, 
      name: "Kuronami Melee", 
      image: kuronami, 
      price: 14.99, 
      availability: "In Stock"
    },
  ];

  return (
    <div>
      <h1>Valorant Skins Store</h1>
      <div className="container">
        {skins.map((skin) => (
          <ProductCard
            key={skin.id}
            name={skin.name}
            image={skin.image}
            price={skin.price}
            availability={skin.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
