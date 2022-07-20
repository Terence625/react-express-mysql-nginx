import React from "react";
import "./ConfirmDialog.css";

interface IConfirmDialog {
  text: string;
  confirmButtonText: string;
  cancelButtonText: string;
  handleConfirm: () => void;
  handleCancel: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const ConfirmDialog = ({
  text,
  confirmButtonText,
  cancelButtonText,
  handleConfirm,
  handleCancel,
}: IConfirmDialog) => {
  return (
    <React.Fragment>
      <div className="greyCover"></div>
      <div className="ConfirmDialog">
        <p>{text}</p>
        <div className="buttonGroup">
          <button onClick={() => handleConfirm()}>{confirmButtonText}</button>
          <button onClick={(e) => handleCancel(e)}>{cancelButtonText}</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfirmDialog;
