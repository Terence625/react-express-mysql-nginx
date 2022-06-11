import React from "react";
import { Error } from "../../ui-components/Error";
import { PageLoading } from "../../ui-components/PageLoading";
import { CreateClientForm } from "./components/CreateClientForm";

export const CreateClientPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [clientId, setClientId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <CreateClientForm />
      {isError && <Error />}
      {isLoading && <PageLoading />}
      {clientId !== "" && <div>Create successfully: {`${clientId}`}</div>}
    </div>
  );
};
