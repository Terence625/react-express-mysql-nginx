import React from "react";
import Pagination from "../../common/Pagination";
import "./ResultList.css";
import { Link } from "react-router-dom";


const ResultList = ({ searchResult, currentPage, onSelectPage }) => {
  const listsPerPage = 3;
  const pageLists = searchResult.slice(
    (currentPage - 1) * listsPerPage,
    currentPage * listsPerPage
  );
  const totalPageNumber = Math.ceil(searchResult.length / listsPerPage);

  return (
    <div>
      <ul>
        {pageLists.map((item) => (
          <li key={item.client_id}>{item.name}</li>
        ))}
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
