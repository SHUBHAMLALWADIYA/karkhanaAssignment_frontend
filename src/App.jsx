import React, { useState } from "react";
import "./App.css";
import artisan from "./assets/artisan.png";
import beverage from "./assets/beverage.png";
import coffee from "./assets/coffee.png";
import mojito from "./assets/mojito.png";
import hottea from "./assets/hotTea.png";
import filter from "./assets/filter.png";
import pen from "./assets/pen.png";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Voucher from "./components/Voucher";
import Summary from "./components/Summary";
import UserProfile from "./components/UserProfile";


const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [voucher, setVoucher] = useState("");
  const [voucherDiscount, setVoucherDiscount] = useState(0);

  const data = [
    { title: "ORI GIMBER 700ml", price: 24.95, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-700ml.png%3Fv%3D1716289074%252C0.6653%252C0.504?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6653&fp-y=0.504&h=248&q=80&w=184&s=6f15fbd0960126422f326528ac72f691" },
    { title: "GIMBER N2 700ml", price: 25.85, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-700ml.png%3Fv%3D1716289074%252C0.6653%252C0.504?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6653&fp-y=0.504&h=248&q=80&w=184&s=6f15fbd0960126422f326528ac72f691" },
    { title: "SML GIMBER 500ml", price: 20.45, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-500ml.png%3Fv%3D1716289073%252C0.6347%252C0.4933?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6347&fp-y=0.4933&h=248&q=80&w=184&s=a39ed462a5f59a02f2092482a1814b95" },
    { title: "GIMBER N2 500 ml", price: 26.00, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL4.png%3Fv%3D1685974102?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=248&q=80&w=184&s=4fde3530ef74e1caa54fe927ecd4978f" },
    { title: "DUO-PACK GIMBE...", price: 52.80, image: "" },
    { title: "S-SML GIMBER 50...", price: 20.25, image: "" },
    { title: "S-SML GIMBER BR...", price: 20.25, image: "" },
    { title: "Shop COOK & GO...", price: 32.50, image: "" },
    { title: "ORI GIMBER 700ml", price: 24.95, image: "" },
    { title: "GIMBER N2 700ml", price: 25.85, image: "" },
    { title: "SML GIMBER 500ml", price: 20.45, image: "" },
    { title: "GIMBER N2 500 ml", price: 26.00, image: "" },
    { title: "DUO-PACK GIMBE...", price: 52.80, image: "" }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
    alert("Product is added in your cart")
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem !== item));
    setTotal(total - item.price);
  };

  const applyVoucher = () => {
    if (voucher === "DISCOUNT10") {
      setVoucherDiscount(total * 0.10);
    } else if (voucher === "DISCOUNT50") {
      setVoucherDiscount(total * 0.50);
    } else {

      alert("Invalid voucher code \n    🛒You can use our New Voucher🛒 \nFor 10% Discount ==> DISCOUNT10 \nFor 50% Discount ==> DISCOUNT50");
    }
  };

  const discount = total * 0.10; // 10% discount
  const gratuity = 4.00; // fixed gratuity amount
  const finalTotal = total - discount - voucherDiscount + gratuity;

  const printTotalAmount=()=>{
    const receipt = `
      Payment Receipt
      ----------------------
      Items Purchased:
      ${cart.map(item => `${item.title}: $${item.price.toFixed(2)}`).join('\n')}
      
      Subtotal: $${total.toFixed(2)}
      Discount: $${discount.toFixed(2)}
      Voucher Discount: $${voucherDiscount.toFixed(2)}
      Gratuity: $${gratuity.toFixed(2)}
      ----------------------
      Total Amount: $${finalTotal.toFixed(2)}
    `;
    alert(receipt)}
  return (
    <div id="parent">
      <div id="leftDiv">
        <SearchBar filter={filter} />
        <Filters
          filters={[
            { img: coffee, text: "Ice Coffee" },
            { img: hottea, text: "Hot Coffee" },
            { img: artisan, text: "Artisan Tea" },
            { img: mojito, text: "Ice Mojito" },
            { img: beverage, text: "Beverage" },
          ]}
        />
        <ProductList data={data} addToCart={addToCart} />
      </div>
      <div id="rightDiv">
        <UserProfile pen={pen} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <Voucher
          voucher={voucher}
          setVoucher={setVoucher}
          applyVoucher={applyVoucher}
        />
        <Summary
          total={total}
          discount={discount}
          voucherDiscount={voucherDiscount}
          gratuity={gratuity}
          finalTotal={finalTotal}
        />
        <button onClick={printTotalAmount} className="print-button">Print Receipt</button>
      </div>
    </div>
  );
};

export default App;
