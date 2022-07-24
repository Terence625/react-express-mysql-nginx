import React, { useState, useEffect } from "react";
import PersonForm from "../common/PersonForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import ConfirmDialog from "../common/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import PageContainer from "../common/PageContainer";
import useRequest from "../hooks/useRequest";

type PersonInfo = Array<{
  person_id: string;
  name: string;
  phone: string;
  email: string;
}>;

const UpdatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [isPersonNotExist, setIsPersonNotExist] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const { personId } = useParams();
  const {
    isError: isPutError,
    isLoading: isPutLoading,
    request: putRequest,
  } = useRequest<typeof formText, string>({
    method: "put",
    url: "/updatePerson/" + personId,
    requestBody: formText,
  });
  const {
    isError: isGetError,
    isLoading: isGetLoading,
    request: getRequest,
  } = useRequest<{}, { personInfo: PersonInfo }>({
    method: "get",
    url: "/" + personId,
  });

  useEffect(() => {
    getRequest().then((res) => {
      if (res.personInfo.length !== 0) setFormText(res.personInfo[0]);
    });
  }, []);

  const handleContinue = () => {
    setIsUpdated(false);
  };

  let navigate = useNavigate();

  const handleBack = () => navigate("/searchPerson");

  return isPersonNotExist ? (
    <div>Person not exist</div>
  ) : (
    <PageContainer
      isError={isPutError || isGetError}
      isLoading={isPutLoading || isGetLoading}
    >
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={() =>
          putRequest().then((res) => {
            if (res === "OK") setIsUpdated(true);
          })
        }
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
