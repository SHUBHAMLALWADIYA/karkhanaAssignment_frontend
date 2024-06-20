import React from "react";
import "../css/Filters.css"

const Filters = ({ filters }) => {
  return (
    <div id="allFilter">
      {filters.map((filter, index) => (
        <div className="filters" key={index}>
          <img src={filter.img} alt="" />
          <p>{filter.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Filters;
