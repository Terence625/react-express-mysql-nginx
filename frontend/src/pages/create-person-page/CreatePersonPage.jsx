import React, { useState } from "react";
import Error from "../common/Error";
import PageLoading from "../common/PageLoading";
import PersonForm from "../common/PersonForm";
import axios from "axios";

const CreatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [personId, setPersonId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitData = async () => {
    setIsLoading(true);
    try {
      const result = await axios({
        method: "post",
        url: "/createPerson",
        data: {
          name: formText.name,
          phone: formText.phone,
          email: formText.email,
        },
      });
      setPersonId(result.data.personId);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={submitData}
      />
      {isError && <Error />}
      {isLoading && <PageLoading />}
      {personId !== "" && <div>Create successfully: {`${personId}`}</div>}
    </div>
  );
};

export default CreatePersonPage;
