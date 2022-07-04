import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";
import "./PersonForm.css";

const nameValidation = (name: string) => {
  return !name.replace(/\s/g, "")
    ? "Please fill in Name"
    : name.length > 15
    ? "Name cannot be longer than 15 characters"
    : "\u00A0";
};

const phoneValidation = (phone: string) => {
  return !phone.replace(/\s/g, "")
    ? "Please fill in Phone"
    : /\D/.test(phone)
    ? "Phone can only be numbers"
    : "\u00A0";
};

const emailValidation = (email: string) => {
  return "\u00A0";
};

const initialErrorMsg = {
  name: "\u00A0",
  phone: "\u00A0",
  email: "\u00A0",
};

interface Input {
  name: string;
  phone: string;
  email: string;
}

interface IPersonFormProps {
  formText: Input;
  onInputChange: (input: Input) => void;
  submitData: () => void;
}

const PersonForm = ({
  formText,
  onInputChange,
  submitData,
}: IPersonFormProps) => {
  const [errorMsg, setErrormsg] = useState(initialErrorMsg);
  const [waitingForConfirm, setWaitingForConfirm] = useState(false);

  const mandatoryMark = <span style={{ color: "red" }}>*</span>;

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [nameErrorMsg, phoneErrorMsg, emailErrorMsg] = [
      nameValidation(formText.name),
      phoneValidation(formText.phone),
      emailValidation(formText.email),
    ];
    setErrormsg({
      name: nameErrorMsg,
      phone: phoneErrorMsg,
      email: emailErrorMsg,
    });
    if (
      !(
        nameErrorMsg === "\u00A0" &&
        phoneErrorMsg === "\u00A0" &&
        emailErrorMsg === "\u00A0"
      )
    )
      return;
    setWaitingForConfirm(true);
  };

  const handleConfirm = () => {
    setWaitingForConfirm(false);
    submitData();
  };

  const handleCancel = () => {
    setWaitingForConfirm(false);
  };

  const handleBlur = () => {
    const [nameErrorMsg, phoneErrorMsg, emailErrorMsg] = [
      nameValidation(formText.name),
      phoneValidation(formText.phone),
      emailValidation(formText.email),
    ];
    setErrormsg({
      name: nameErrorMsg,
      phone: phoneErrorMsg,
      email: emailErrorMsg,
    });
  };

  return (
    <div>
      <form className="PersonForm" onSubmit={handleSubmit}>
        <label>
          {mandatoryMark}Name:
          <input
            type="text"
            value={formText.name}
            style={
              errorMsg.name === "\u00A0" ? undefined : { borderColor: "red" }
            }
            onBlur={handleBlur}
            onChange={(e) =>
              onInputChange({ ...formText, name: e.target.value })
            }
          />
          <div className="errMsg">{errorMsg.name}</div>
        </label>
        <label>
          {mandatoryMark}Phone number:
          <input
            type="text"
            value={formText.phone}
            style={
              errorMsg.phone === "\u00A0" ? undefined : { borderColor: "red" }
            }
            onBlur={handleBlur}
            onChange={(e) =>
              onInputChange({ ...formText, phone: e.target.value })
            }
          />
          <div className="errMsg">{errorMsg.phone}</div>
        </label>
        <label>
          E-mail:
          <input
            type="text"
            value={formText.email}
            style={
              errorMsg.email === "\u00A0" ? undefined : { borderColor: "red" }
            }
            onBlur={handleBlur}
            onChange={(e) =>
              onInputChange({ ...formText, email: e.target.value })
            }
          />
          <div className="errMsg">{errorMsg.email}</div>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to={"/searchPerson"}>{"Back to Search"}</Link>
      {waitingForConfirm && (
        <ConfirmDialog
          text="Are you sure to submit"
          confirmButtonText="Confirm"
          cancelButtonText="Cancel"
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default PersonForm;
