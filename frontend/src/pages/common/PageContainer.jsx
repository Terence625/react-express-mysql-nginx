import React from "react";
import "./PageContainer.css";

const PageContainer = ({ children, isLoading = false, isError = false }) => {
  return (
    <React.Fragment>
      {isLoading && (
        <React.Fragment>
          <div className="greyCover"></div>
          <div className="loader"></div>
        </React.Fragment>
      )}
      {isError && <div className="errorToast">oops, something went wrong!</div>}
      <div className="pageContent">{children}</div>
    </React.Fragment>
  );
};

export default PageContainer;
