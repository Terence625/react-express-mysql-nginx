import React from "react";
import ConfirmDialog from "./ConfirmDialog";
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
      {isWaitingForSubmit && <ConfirmDialog />}
      <div className="pageContent">{children}</div>
    </div>
  );
};

export default PageContainer;
