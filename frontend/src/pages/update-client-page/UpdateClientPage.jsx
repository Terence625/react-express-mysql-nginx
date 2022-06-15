import React, { useState, useEffect } from "react";
import Error from "../common/Error";
import PageLoading from "../common/PageLoading";
import ClientForm from "../common/ClientForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateClientPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { clientId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios({
          method: "get",
          url: "/" + clientId,
        });
        const clientInfo = result.data.clientInfo[0];
        setFormText({
          name: clientInfo.name,
          phone: clientInfo.phone,
          email: clientInfo.email,
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
  }

  return (
    <div>
      <ClientForm
        formText={formText}
        onInputChange={(value) => setFormText(value)}
        submitData={() => console.log("submit")}
      />
      {isError && <Error />}
      {isLoading && <PageLoading />}
    </div>
  );
};

export default UpdateClientPage;
