import React from "react";
import "./Pagination.css";

const range = (from, to, step = 1) => {
  const range = [];
  for (let i = from; i <= to; i += step) range.push(i);
  return range;
};

const Pagination = ({
  pageNeighbours,
  totalPageNumber,
  onSelectPage,
  currentPage,
}) => {
  const totalPageBlocks = pageNeighbours * 2 + 5;
  let pageNumberDisplay;

  const leftBound = currentPage - pageNeighbours;
  const rightBound = currentPage + pageNeighbours;
  if (totalPageBlocks < totalPageNumber) {
    if (leftBound > 2 && rightBound < totalPageNumber - 1)
      pageNumberDisplay = [
        1,
        "leftEllipsis",
        ...range(leftBound, rightBound),
        "rightEllipsis",
        totalPageNumber,
      ];
    else if (leftBound <= 2 && rightBound < totalPageNumber - 1)
      pageNumberDisplay = [
        ...range(1, totalPageBlocks - 2),
        "rightEllipsis",
        totalPageNumber,
      ];
    else if (leftBound > 2 && rightBound >= totalPageNumber - 1)
      pageNumberDisplay = [
        1,
        "leftEllipsis",
        ...range(totalPageNumber - totalPageBlocks + 3, totalPageNumber),
      ];
  } else pageNumberDisplay = range(1, totalPageNumber);

  const handleEllipsisClick = (ellipsis) => {
    if (ellipsis === "leftEllipsis")
      onSelectPage(pageNumberDisplay.at(2) - pageNeighbours - 1);
    else onSelectPage(pageNumberDisplay.at(-3) + pageNeighbours + 1);
  };

  return (
    <ul className="PageNumbers">
      {pageNumberDisplay.map((item) => {
        const stringItem = item.toString();
        if (stringItem.includes("Ellipsis")) {
          return (
            <li
              key={stringItem}
              onClick={(e) => {
                e.preventDefault();
                handleEllipsisClick(stringItem);
              }}
            >
              ...
            </li>
          );
        }
        return (
          <li
            key={stringItem}
            id={stringItem}
            style={
              stringItem === currentPage.toString() ? { color: "black" } : null
            }
            onClick={(e) => {
              e.preventDefault();
              onSelectPage(parseInt(e.target.id));
            }}
          >
            {stringItem}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
