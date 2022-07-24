import React, { useState } from "react";
import PersonForm from "../common/PersonForm";
import PageContainer from "../common/PageContainer";
import ConfirmDialog from "../common/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import useRequest from "../hooks/useRequest";

const CreatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [personId, setPersonId] = useState("");
  const { isError, isLoading, request} = useRequest<
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
    setPersonId("");
  };

  const handleBack = () => navigate("/searchPerson");

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={() => request().then((res) => setPersonId(res.personId))}
      />
      {personId !== "" && (
        <ConfirmDialog
          text={"Create successfully, client id: " + personId}
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
