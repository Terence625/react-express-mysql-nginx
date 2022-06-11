import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

const SearchClientPage = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
    </div>
  );
};

export default SearchClientPage;
