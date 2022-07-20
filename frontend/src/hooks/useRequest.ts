import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface IUseRequestParams<RequestType> {
  method: "post" | "get" | "put";
  url: string;
  requestBody?: RequestType;
}

interface IUseRequestResult<ResponseType> {
  isError: boolean;
  isLoading: boolean;
  response: ResponseType | null;
  setResponse: React.Dispatch<React.SetStateAction<ResponseType | null>>;
}

const useRequest = <RequestType, ResponseType>({
  method,
  url,
  requestBody,
}: IUseRequestParams<RequestType>): IUseRequestResult<ResponseType> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<ResponseType | null>(null);
  const firstUpdate = useRef(true);
  const request = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await axios.request({
        method: method,
        url: url,
        data: requestBody,
      });
      setResponse(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    request();
  }, [url, requestBody]);

  return { isError, isLoading, response, setResponse };
};

export default useRequest;
