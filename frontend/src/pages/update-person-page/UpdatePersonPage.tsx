import React, { useState, useEffect } from "react";
import PersonForm from "../common/PersonForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import ConfirmDialog from "../common/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import PageContainer from "../common/PageContainer";
import useRequest from "../hooks/useRequest";

const UpdatePersonPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [isPersonNotExist, setIsPersonNotExist] = useState(false);
  const { personId } = useParams();
  const { isError, isLoading, request, response, setResponse } = useRequest<
    typeof formText,
    string
  >({
    method: "put",
    url: "/updatePerson/" + personId,
    requestBody: formText,
  });

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      // setIsError(false);
      try {
        const result = await axios({
          method: "get",
          url: "/" + personId,
        });
        const personInfo = result.data.personInfo[0];
        if (personInfo === undefined) {
          setIsPersonNotExist(true);
          return;
        }
        setFormText({
          name: personInfo.name,
          phone: personInfo.phone,
          email: personInfo.email,
        });
      } catch (error) {
        // setIsError(true);
      }
      // setIsLoading(false);
    };
    fetchData();
    // request();
    // setFormText(response.personInfo[0]);
  }, []);

  const handleContinue = () => {
    setResponse("");
  };

  let navigate = useNavigate();

  const handleBack = () => navigate("/searchPerson");

  return isPersonNotExist ? (
    <div>Person not exist</div>
  ) : (
    <PageContainer isLoading={isLoading} isError={isError}>
      <PersonForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={request}
      />
      {response === "OK" && (
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
