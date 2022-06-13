import axios from "axios";
import Error from "../../ui-components/Error";
import PageLoading from "../../ui-components/PageLoading";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";

const SearchClientPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState({ clientInfo: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const receiveData = async () => {
    // if (searchValue.replace(/\s/g, "") === "") return;
    setIsLoading(true);
    try {
      const result = await axios({
        method: "get",
        url: `/searchClient?name=${searchValue}`,
      });
      setSearchResult(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchBar
        receiveData={receiveData}
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
      {isError && <Error />}
      {isLoading && <PageLoading />}
      <ResultList
        searchResult={searchResult}
        currentPage={currentPage}
        onSelectPage={(value) => setCurrentPage(value)}
      />
    </div>
  );
};

export default SearchClientPage;
