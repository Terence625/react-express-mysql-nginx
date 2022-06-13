import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= props.pageNumber; i++) {
    pageNumbers.push(i);
  }
  pageNumbers.push(pageNumbers.at(-1));

  return (
    <ul className="PageNumbers">
      {pageNumbers.slice(0, 5).map((number) => {
        // if (number === "...") {
        //   return (
        //     <li key={}>...</li>
        //   )
        // }
        return (
          <li
            key={number}
            id={number}
            style={number === props.currentPage ? { color: "black" } : null}
            onClick={(e) => props.onSelectPage(parseInt(e.target.id))}
          >
            {number}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
