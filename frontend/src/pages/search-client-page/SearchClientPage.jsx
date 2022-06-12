import axios from "axios";
import Error from "../../ui-components/Error";
import PageLoading from "../../ui-components/PageLoading";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

const SearchClientPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState({ clientInfo: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const receiveData = async () => {
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
      <ul>
        {searchResult.clientInfo.map((item) => (
          <li key={item.client_id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchClientPage;
