import React from "react";
import "./ConfirmDialog.css";

const ConfirmDialog = ({
  text,
  confirmButtonText,
  cancelButtonText,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <React.Fragment>
      <div className="greyCover"></div>
      <div className="ConfirmDialog">
        <p>{text}</p>
        <div className="buttonGroup">
          <button onClick={handleConfirm}>{confirmButtonText}</button>
          <button onClick={handleCancel}>{cancelButtonText}</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfirmDialog;
