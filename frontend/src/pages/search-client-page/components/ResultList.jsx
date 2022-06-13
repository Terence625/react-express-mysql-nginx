import React, { useState } from "react";
import Pagination from "../../common/Pagination";
import "./ResultList.css";

const ResultList = (props) => {
  const listsPerPage = 3;
  const pageLists = props.searchResult.clientInfo.slice(
    (props.currentPage - 1) * listsPerPage,
    props.currentPage * listsPerPage
  );
  const pageNumber = Math.ceil(
    props.searchResult.clientInfo.length / listsPerPage
  );

  return (
    <div>
      <ul>
        {pageLists.map((item) => (
          <li key={item.client_id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        pageNumber={pageNumber}
        onSelectPage={props.onSelectPage}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ResultList;
