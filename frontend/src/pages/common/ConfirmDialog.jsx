import React from "react";
import "./ConfirmDialog.css";

const ConfirmDialog = ({handleConfirm, handleCancel}) => {
  return (
    <div className="ConfirmDialog">
      <p>Are you sure to submit</p>
      <div className="buttonGroup">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
