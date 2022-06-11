import React from "react";

const SearchBar = (props) => {
  return (
    <form>
      <input
        type="text"
        value={props.searchValue}
        onChange={(e) => props.onSearchValueChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
