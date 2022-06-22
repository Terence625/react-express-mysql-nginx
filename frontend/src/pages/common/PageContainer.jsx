import React from "react";
import "./PageContainer.css";

const PageContainer = ({ children, isLoading = false }) => {

  return (
    <div>
      <div
        className="greyCover"
        style={isLoading ? { display: "block" } : null}
      ></div>
      {isLoading && <div className="loader"></div>}
      {children}
    </div>
  );
};

export default PageContainer;
