import React, { useState } from "react";
import "./ResultList.css";

const ResultList = (props) => {
  const listsPerPage = 3;
  const pageNumbers = [];
  const pageLists = props.searchResult.clientInfo.slice(
    (props.currentPage - 1) * listsPerPage,
    props.currentPage * listsPerPage
  );
  console.log(props.searchResult.clientInfo);
  console.log(pageLists);

  for (
    let i = 1;
    i <= Math.ceil(props.searchResult.clientInfo.length / listsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageLists.map((item) => (
          <li key={item.client_id}>{item.name}</li>
        ))}
      </ul>
      <ul className="PageNumbers">
        {pageNumbers.map((number) => (
          <li
            key={number}
            id={number}
            onClick={(e) => props.onSelectPage(e.target.id)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
