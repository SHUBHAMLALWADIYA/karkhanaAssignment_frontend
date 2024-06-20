import React from "react";
import "../css/Cart.css"
const Cart = ({ cart }) => {
  return (
    <div className="cart-items">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.title}</p>
          <p className="price">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
