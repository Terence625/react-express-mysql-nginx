import React, { useState } from "react";

export const CreateClientForm = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });

  return (
    <form
      onSubmit={(e) => {
        alert(formText.name + " " + formText.phone + " " + formText.email);
        e.preventDefault();
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={formText.name}
          onChange={(e) => setFormText({ ...formText, name: e.target.value })}
        />
      </label>
      <label>
        Phone number:
        <input
          type="text"
          value={formText.phone}
          onChange={(e) => setFormText({ ...formText, phone: e.target.value })}
        />
      </label>
      <label>
        E-mail:
        <input
          type="text"
          value={formText.email}
          onChange={(e) => setFormText({ ...formText, email: e.target.value })}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
