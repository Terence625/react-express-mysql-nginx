import React from "react";
import "./SearchBar.css";

interface ISearchBarProps {
  receiveData: () => void;
  searchValue: string;
  onSearchValueChange: (vaue: string) => void;
}

const SearchBar = ({
  receiveData,
  searchValue,
  onSearchValueChange,
}: ISearchBarProps) => {
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
        placeholder="Person name.."
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
