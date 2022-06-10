import React, { useEffect, useState } from "react";
import axios from "axios";

export const CreateClientForm = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [clientId, setClientId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3001/createClient",
        data: {
          name: formText.name,
          phone: formText.phone,
          email: formText.email,
        },
      });
      setClientId(result.data.clientId);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={submitData}>
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
            onChange={(e) =>
              setFormText({ ...formText, phone: e.target.value })
            }
          />
        </label>
        <label>
          E-mail:
          <input
            type="text"
            value={formText.email}
            onChange={(e) =>
              setFormText({ ...formText, email: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Something went wrong ...</div>}
      {clientId !== "" && <div>Create successfully: {`${clientId}`}</div>}
    </div>
  );
};
