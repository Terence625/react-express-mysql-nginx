import React, { useState } from "react";
import Error from "../common/Error";
import PageLoading from "../common/PageLoading";
import CreateClientForm from "./components/CreateClientForm";
import axios from "axios";

const CreateClientPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [clientId, setClientId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitData = async () => {
    setIsLoading(true);
    try {
      const result = await axios({
        method: "post",
        url: "/createClient",
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
      <CreateClientForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={submitData}
      />
      {isError && <Error />}
      {isLoading && <PageLoading />}
      {clientId !== "" && <div>Create successfully: {`${clientId}`}</div>}
    </div>
  );
};

export default CreateClientPage;
