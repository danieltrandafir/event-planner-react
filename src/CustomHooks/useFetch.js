import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url === null) return;
    // function declaration?
    (async function () {
      try {
        setIsLoading(true);
        const result = await axios.get(url);
        console.log(result.data._embedded.events);
        setData(result.data);
      } catch (error) {
        console.log("Error from fetch", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { isLoading, data, error };
};
