import React, { useState } from "react";
import "./App.css";
import artisan from "./assets/artisan.png";
import beverage from "./assets/beverage.png";
import coffee from "./assets/coffee.png";
import mojito from "./assets/mojito.png";
import hottea from "./assets/hotTea.png";
import filter from "./assets/filter.png";
import pen from "./assets/pen.png";

import SearchBar from "./components/SearchBar"
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
    { title: "ORI GIMBER 700ml", price: 24.95, image: "" },
    { title: "GIMBER N2 700ml", price: 25.85, image: "" },
    { title: "SML GIMBER 500ml", price: 20.45, image: "" },
    { title: "GIMBER N2 500 ml", price: 26.00, image: "" },
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
  };

  const applyVoucher = () => {
    if (voucher === "DISCOUNT10" ) {
      setVoucherDiscount(total * 0.10);
    } 
    else if(voucher === "DISCOUNT50"){
      setVoucherDiscount(total * 0.50);
    }
      else {
      alert("Invalid voucher code");
    }
  };

  const discount = total * 0.10; // 10% discount
  const gratuity = 4.00; // fixed gratuity amount
  const finalTotal = total - discount - voucherDiscount + gratuity;

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
        <Cart cart={cart} />
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
        <button className="print-button">Print Receipt</button>
      </div>
    </div>
  );
};

export default App;
