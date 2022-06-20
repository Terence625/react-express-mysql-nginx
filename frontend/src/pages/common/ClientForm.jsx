import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClientForm = ({ formText, onInputChange, submitData }) => {
  const [blankInput, setBlankInput] = useState([]);

  const validateData = () => {
    const mandatoryInput = ["name", "phone"];
    const blankInput = [];
    mandatoryInput.forEach((item) => {
      if (formText[item].replace(/\s/g, "") === "") blankInput.push(item);
    });
    return blankInput;
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const blankInput = validateData();
          setBlankInput(blankInput);
          if (blankInput.length !== 0) return;
          window.confirm("are you sure?");
          submitData();
        }}
      >
        <label>
          <span style={{ color: "red" }}>*</span>Name:
          <input
            type="text"
            value={formText.name}
            onChange={(e) =>
              onInputChange({ ...formText, name: e.target.value })
            }
          />
        </label>
        <label>
          <span style={{ color: "red" }}>*</span>Phone number:
          <input
            type="text"
            value={formText.phone}
            onChange={(e) =>
              onInputChange({ ...formText, phone: e.target.value })
            }
          />
        </label>
        <label>
          E-mail:
          <input
            type="text"
            value={formText.email}
            onChange={(e) =>
              onInputChange({ ...formText, email: e.target.value })
            }
          />
        </label>
        {!blankInput && <div>cannot be blank</div>}
        <button type="submit">Submit</button>
        {blankInput.length !== 0 && (
          <div>{blankInput.toString() + " should not be blank"}</div>
        )}
      </form>
      <Link to={"/searchClient"}>{"Back to Search"}</Link>
    </div>
  );
};

export default ClientForm;
