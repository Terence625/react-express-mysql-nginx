import React from "react";
import "./PageContainer.css"

const PageContainer = ({ children, isLoading = false }) => {
  if (isLoading) return <div className="loader"></div>;
  return children;
};

export default PageContainer;
