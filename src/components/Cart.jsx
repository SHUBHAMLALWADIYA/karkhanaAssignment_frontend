import React from 'react';
import '../css/Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-items">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
          <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
