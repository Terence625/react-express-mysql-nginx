import React from "react";
import "./SearchBar.css"

const SearchBar = ({ receiveData, searchValue, onSearchValueChange }) => {
  return (
    <form 
      className="SearchBar"
      onSubmit={(e) => {
        e.preventDefault();
        if (!searchValue.replace(/\s/g, "")) return;
        receiveData();
      }}
    >
      <input
        type="text"
        value={searchValue}
        placeholder="Client name.."
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
