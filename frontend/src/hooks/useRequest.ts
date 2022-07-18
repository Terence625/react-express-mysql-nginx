import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface IUseRequestParams {
  method: "post" | "get" | "put";
  url: string;
  data?: object;
}

interface IUseRequestResult<T> {
  isError: boolean;
  isLoading: boolean;
  response: T | undefined;
}

const useRequest = <T>({
  method,
  url,
  data,
}: IUseRequestParams): IUseRequestResult<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<T>();
  const firstUpdate = useRef(true);
  const request = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await axios({
        method: method,
        url: url,
        data: data,
      });
      setResponse(result.data);
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
  }, [url]);

  return { isError, isLoading, response };
};

export default useRequest;
