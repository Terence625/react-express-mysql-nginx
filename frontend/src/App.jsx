import FilterableProductTable from "./pages/practice-page/FilterableProductTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CreateClientPage from "./pages/create-client-page/CreateClientPage";
import SearchClientPage from "./pages/search-client-page/SearchClientPage";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/practice"
          element={<FilterableProductTable products={PRODUCTS} />}
        />
        <Route path="/createClient" element={<CreateClientPage />} />
        <Route path="/searchClient" element={<SearchClientPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
