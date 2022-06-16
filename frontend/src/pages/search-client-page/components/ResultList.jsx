import React from "react";
import Pagination from "../../common/Pagination";
import "./ResultList.css";
import { Link } from "react-router-dom";

const ResultList = ({ searchResult, currentPage, onSelectPage }) => {
  const listsPerPage = 3;
  const reversedSearchResult = searchResult.slice(0).reverse();
  const pageLists = reversedSearchResult.slice(
    (currentPage - 1) * listsPerPage,
    currentPage * listsPerPage
  );
  const totalPageNumber = Math.ceil(searchResult.length / listsPerPage);

  return (
    <div>
      <ul>
        {pageLists.map((item) => {
          console.log(item.client_id);
          return (
            <li key={item.client_id}>
              <Link to={"/" + item.client_id.toString()}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <Pagination
        pageNeighbours={1}
        totalPageNumber={totalPageNumber}
        onSelectPage={onSelectPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ResultList;
