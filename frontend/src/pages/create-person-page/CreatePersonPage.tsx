import React, { useState } from "react";
import PersonForm from "../common/PersonForm";
import PageContainer from "../common/PageContainer";
import ConfirmDialog from "../common/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import useRequest from "../hooks/useRequest";

const CreatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const { isError, isLoading, request, response, setResponse } = useRequest<
    typeof formText,
    { personId: string }
  >({
    method: "post",
    url: "/createPerson",
    requestBody: formText,
  });

  let navigate = useNavigate();

  const handleContinue = () => {
    setFormText({ name: "", phone: "", email: "" });
    setResponse({ personId: "" });
  };

  const handleBack = () => navigate("/searchPerson");

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={request}
      />
      {response && response.personId !== "" && (
        <ConfirmDialog
          text={"Create successfully, client id: " + response.personId}
          confirmButtonText="Continue to create"
          cancelButtonText="Back to search"
          handleConfirm={handleContinue}
          handleCancel={handleBack}
        />
      )}
    </PageContainer>
  );
};

export default CreatePersonPage;
