import React from "react";

export default function Header({ totalItems, onCartClick }) {
  return (
    <header className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
      <h1>ReactMeals</h1>
      <button className="wishlist-btn" onClick={onCartClick}>
        Your Cart <span className="cart-count">{totalItems}</span>
      </button>
    </header>
  );
}
