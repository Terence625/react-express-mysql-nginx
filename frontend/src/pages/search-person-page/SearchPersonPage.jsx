import axios from "axios";
import PageContainer from "../common/PageContainer";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import { Link } from "react-router-dom";

const SearchPersonPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const receiveData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios({
        method: "get",
        url: `/searchPerson?name=${searchValue}`,
      });
      setSearchResult(result.data.personList);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
    setCurrentPage(1);
  };

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <SearchBar
        receiveData={receiveData}
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
      <Link to={"/createPerson"}>Create New Person</Link>
      <ResultList
        searchResult={searchResult}
        currentPage={currentPage}
        onSelectPage={(value) => setCurrentPage(value)}
      />
    </PageContainer>
  );
};

export default SearchPersonPage;
