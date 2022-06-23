import React, { useState, useEffect } from "react";
import PersonForm from "../common/PersonForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import ConfirmDialog from "../common/ConfirmDialog";
import { useLinkClickHandler } from "react-router-dom";
import PageContainer from "../common/PageContainer";

const UpdatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const { personId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios({
          method: "get",
          url: "/" + personId,
        });
        const personInfo = result.data.personInfo[0];
        setFormText({
          name: personInfo.name,
          phone: personInfo.phone,
          email: personInfo.email,
        });
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const submitData = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: "put",
        url: "/updatePerson/" + personId,
        data: {
          name: formText.name,
          phone: formText.phone,
          email: formText.email,
        },
      });
      setIsUpdated(true);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleContinue = () => {
    setIsUpdated(false)
  };

  const handleBack = useLinkClickHandler("/searchPerson");

  return (
    <PageContainer isLoading={isLoading} isError={isError}>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={submitData}
      />
      {isUpdated && (
        <ConfirmDialog
          text="Update successfully"
          confirmButtonText="Continue to update"
          cancelButtonText="Back to search"
          handleConfirm={handleContinue}
          handleCancel={handleBack}
        />
      )}
    </PageContainer>
  );
};

export default UpdatePersonPage;
