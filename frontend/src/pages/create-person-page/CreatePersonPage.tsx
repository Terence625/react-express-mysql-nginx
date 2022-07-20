import React, { useState } from "react";
import PersonForm from "../common/PersonForm";
import axios from "axios";
import PageContainer from "../common/PageContainer";
import ConfirmDialog from "../common/ConfirmDialog";
import { useNavigate  } from "react-router-dom";

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

  let navigate = useNavigate();

  const handleContinue = () => {
    setFormText({ name: "", phone: "", email: "" });
    setPersonId("")
  };

  const handleBack = () => navigate("/searchPerson");

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={submitData}
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
