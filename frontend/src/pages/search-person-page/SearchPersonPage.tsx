import PageContainer from "../common/PageContainer";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import { Link } from "react-router-dom";
import useRequest from "../hooks/useRequest";

type PersonListType = Array<{
  person_id: number;
  name: string;
}>;

const SearchPersonPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [personList, setPersonList] = useState<PersonListType>();
  const { isError, isLoading, request } = useRequest<
    string,
    { personList: PersonListType }
  >({
    method: "get",
    url: `/searchPerson?name=${searchValue}`,
  });

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <SearchBar
        receiveData={() => {
          request().then((res) => setPersonList(res.personList));
          setCurrentPage(1);
        }}
        searchValue={searchValue}
        onSearchValueChange={(value) => setSearchValue(value)}
      />
      <Link to={"/createPerson"}>Create New Person</Link>
      {personList && (
        <ResultList
          searchResult={personList}
          currentPage={currentPage}
          onSelectPage={(value) => setCurrentPage(value)}
        />
      )}
    </PageContainer>
  );
};

export default SearchPersonPage;
