import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, parseData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(config.requestURL, {
        method: "GET",
        headers: {},
        body: null,
      });

      if (!response.ok) throw new Error("Request Failed.");

      const data = await response.json();
      const reqType = config.requestType;

      parseData(reqType, data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
