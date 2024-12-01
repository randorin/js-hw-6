import React from "react";

const ProductCard = ({ name, image, price, availability }) => {
  return (
    <div className="product-card" style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", width: "250px", textAlign: "center" }}>
      <img src={image} alt={name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
      <h3 style={{ fontSize: "1.2rem", margin: "10px 0" }}>{name}</h3>
      <p style={{ fontSize: "1rem", fontWeight: "bold" }}>${price}</p>
      <p style={{ color: availability === "In Stock" ? "green" : "red" }}>{availability}</p>
    </div>
  );
};

export default ProductCard;
