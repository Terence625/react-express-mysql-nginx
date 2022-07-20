import React from "react";
import "./SearchBar.css";

interface ISearchBarProps {
  onSearch: () => void;
  searchValue: string;
  onSearchValueChange: (vaue: string) => void;
}

const SearchBar = ({
  onSearch,
  searchValue,
  onSearchValueChange,
}: ISearchBarProps) => {
  return (
    <form
      className="SearchBar"
      onSubmit={(e) => {
        e.preventDefault();
        if (!searchValue.replace(/\s/g, "")) return;
        onSearch();
      }}
    >
      <input
        type="text"
        value={searchValue}
        placeholder="Person name.."
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
