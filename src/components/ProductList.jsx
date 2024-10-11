import React from "react";
import "../css/ProductList.css"

const ProductList = ({ data, addToCart }) => {
  return (
    <div id="items">
      {data.map((ele, index) => (
        <div className="products" key={index}>
          <img
            src="https://uk.gimber.com/cdn/shop/products/gimber-200ml_430x430_crop_center@2x.jpg?v=1608712709"
            alt=""
          />
          <p>{ele.title}</p>
          <p className="price">${ele.price.toFixed(2)}</p>
          <button onClick={() => addToCart(ele)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
