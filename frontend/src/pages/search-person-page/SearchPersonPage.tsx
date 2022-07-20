import PageContainer from "../common/PageContainer";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import { Link } from "react-router-dom";
import useRequest from "../hooks/useRequest";

const SearchPersonPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isError, isLoading, request, response } = useRequest<
    string,
    {
      personList: {
        person_id: number;
        name: string;
      }[];
    }
  >({
    method: "get",
    url: `/searchPerson?name=${searchValue}`,
  });

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <SearchBar
        receiveData={() => {
          request();
          setCurrentPage(1);
        }}
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
      <Link to={"/createPerson"}>Create New Person</Link>
      {response && (
        <ResultList
          searchResult={response.personList}
          currentPage={currentPage}
          onSelectPage={(value) => setCurrentPage(value)}
        />
      )}
    </PageContainer>
  );
};

export default SearchPersonPage;
