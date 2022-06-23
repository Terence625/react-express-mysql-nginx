import React from "react";
import "./ConfirmDialog.css";

const ConfirmDialog = () => {
  return (
    <div className="ConfirmDialog">
      <p>Are you sure to submit</p>
      <div className="buttonGroup">
        <button>Confirm</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
