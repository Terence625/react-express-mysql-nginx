import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import React, { useState } from "react";
import "./FilterableProductTable.css";

const FilterableProductTable = (props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInstockOnly] = useState(false);

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={(value) => setFilterText(value)}
        onInstockChange={(checked) => setInstockOnly(checked)}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;