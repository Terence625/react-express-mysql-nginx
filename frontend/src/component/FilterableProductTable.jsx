import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import React from "react";

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
