import axios, {AxiosError} from "axios";
import {useCallback, useEffect, useState} from "react";

export const useFetch = (url: string, domain?: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState("");

    const fetchData = useCallback( async () => {
      try {
        setError("");
        const response = await axios.get(url);
        setData(response.data[`${domain}`]);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, [domain, url]);

    useEffect(() => {
        void fetchData();
    }, [fetchData, url]);

    return {data, loading, error};
};
