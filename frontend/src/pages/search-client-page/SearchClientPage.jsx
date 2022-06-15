import axios from "axios";
import Error from "../common/Error";
import PageLoading from "../common/PageLoading";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import { Link } from "react-router-dom";

const SearchClientPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState({ clientInfo: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const receiveData = async () => {
    if (searchValue.replace(/\s/g, "") === "") return;
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
      <Link to={"/createClient"}>Create New Client</Link>
      {isError && <Error />}
      {isLoading && <PageLoading />}
      {searchResult.clientInfo.length !== 0 && (
        <ResultList
          searchResult={searchResult}
          currentPage={currentPage}
          onSelectPage={(value) => setCurrentPage(value)}
        />
      )}
    </div>
  );
};

export default SearchClientPage;
