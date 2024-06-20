import React from "react";
import "../css/SearchBar.css"

const SearchBar = ({ filter }) => {
  return (
    <div id="nav">
      <div id="first">
        <input type="text" placeholder="Search all product here..." />
        <button>Search</button>
      </div>
      <button>
        <img src={filter} alt="filter" />
      </button>
    </div>
  );
};

export default SearchBar;
