import React from "react";

const SearchBar = (props) => {
  console.log(props)
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => props.onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => props.onInstockChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar