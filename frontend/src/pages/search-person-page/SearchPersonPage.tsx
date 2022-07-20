import PageContainer from "../common/PageContainer";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import { Link } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const SearchPersonPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [url, setUrl] = useState("/searchPerson?name=");
  const [currentPage, setCurrentPage] = useState(1);
  const { isError, isLoading, response } = useRequest<{
    personList: {
      person_id: number;
      name: string;
      phone: string;
      email: string;
    }[];
  }>({
    method: "get",
    url,
  });

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <SearchBar
        search={() => setUrl(`searchPerson?name=${searchValue}`)}
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
      <Link to={"/createPerson"}>Create New Person</Link>
      {response && response.personList && (
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
