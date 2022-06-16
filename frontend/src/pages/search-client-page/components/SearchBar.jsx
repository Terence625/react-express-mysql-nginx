import React from "react";

const SearchBar = ({ receiveData, searchValue, onSearchValueChange }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchValue.replace(/\s/g, "") === "") return;
        receiveData();
      }}
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
