import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setError("");
      const response = await axios.get(url);
      setData(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [url]);

  return { data, loading, error };
};
