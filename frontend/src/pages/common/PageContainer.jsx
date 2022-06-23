import React from "react";
import "./PageContainer.css";

const PageContainer = ({
  children,
  isLoading = false,
  isError = false,
  isWaitingForSubmit = false,
}) => {
  return (
    <div>
      <div
        className="greyCover"
        style={isLoading ? { display: "block" } : null}
      ></div>
      {isLoading && <div className="loader"></div>}
      {isError && <div className="errorToast">oops, something went wrong!</div>}
      <div className="pageContent">{children}</div>
    </div>
  );
};

export default PageContainer;
