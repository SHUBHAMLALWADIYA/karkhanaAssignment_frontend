import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import artisan from "./assets/artisan.png";
import beverage from "./assets/beverage.png";
import coffee from "./assets/coffee.png";
import mojito from "./assets/mojito.png";
import hottea from "./assets/hotTea.png";

const App = () => {
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
  return (
    <div id="parent">
      <div id="leftDiv">
        <div id="nav">
          <div id="first">
            <input type="text" placeholder="Search all product here..." />
            <button>Search</button>
          </div>
          <button>filter</button>
        </div>
        <div id="allFilter">
          <div className="filters">
            <img src={coffee} alt="" />
            Ice Coffee
          </div>
          <div className="filters">
            <img src={hottea} alt="" />
            Hot Coffee
          </div>
          <div className="filters">
            <img src={artisan} alt="" />
            Artisan Tea
          </div>
          <div className="filters">
            <img src={mojito} alt="" />
            Ice Mojito
          </div>
          <div className="filters">
            <img src={beverage} alt="" />
            Beverage
          </div>
        </div>
        <div id="iteams">{
          data.map((ele,index)=>(
            <div className="products">
            <img
              src="https://uk.gimber.com/cdn/shop/products/gimber-200ml_430x430_crop_center@2x.jpg?v=1608712709"
              alt=""
            />
            <p>{ele.title}</p>
            <p className="price">${ele.price}</p>
            <button>add to cart</button>
          </div>
          ))}
         
          
        </div>
        main
      </div>
      <div id="rightDiv">side</div>
    </div>
  );
};

export default App;
