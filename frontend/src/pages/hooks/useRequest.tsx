import React, { useState } from "react";
import axios from "axios";

interface IUseRequestParams<RequestBodyType> {
  method: "post" | "get" | "put";
  url: string;
  requestBody?: RequestBodyType;
}

interface IUseRequestReturn<ResponseType> {
  isError: boolean;
  isLoading: boolean;
  request: () => Promise<ResponseType>;
}

const useRequest = <RequestBodyType, ResponseType>({
  method,
  url,
  requestBody,
}: IUseRequestParams<RequestBodyType>): IUseRequestReturn<ResponseType> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const request = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await axios({
        method: method,
        url: url,
        data: requestBody,
      });
      setIsLoading(false);
      return data;
    } catch (error) {
      console.log(error)
      setIsError(true);
    }
    setIsLoading(false);
  };

  return { isError, isLoading, request };
};

export default useRequest;
