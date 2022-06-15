import React from "react";

const ClientForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.submitData();
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={props.formText.name}
          onChange={(e) =>
            props.onInputChange({ ...props.formText, name: e.target.value })
          }
        />
      </label>
      <label>
        Phone number:
        <input
          type="text"
          value={props.formText.phone}
          onChange={(e) =>
            props.onInputChange({ ...props.formText, phone: e.target.value })
          }
        />
      </label>
      <label>
        E-mail:
        <input
          type="text"
          value={props.formText.email}
          onChange={(e) =>
            props.onInputChange({ ...props.formText, email: e.target.value })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientForm;
