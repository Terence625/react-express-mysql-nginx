import React, { useState } from "react";
import PersonForm from "../common/PersonForm";
import axios from "axios";
import PageContainer from "../common/PageContainer";

const CreatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [personId, setPersonId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitData = async () => {
    setIsLoading(true);
    setIsError(false);
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
    <PageContainer isLoading={isLoading} isError={isError}>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={submitData}
      />
      {personId !== "" && <div>Create successfully: {`${personId}`}</div>}
    </PageContainer>
  );
};

export default CreatePersonPage;
