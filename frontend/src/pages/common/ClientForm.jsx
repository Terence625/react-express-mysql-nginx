import React from "react";

const ClientForm = ({formText, onInputChange, submitData}) => {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitData();
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={formText.name}
          onChange={(e) =>
            onInputChange({ ...formText, name: e.target.value })
          }
        />
      </label>
      <label>
        Phone number:
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientForm;
