"use client";
import { useEffect, useState } from "react";
import { ISearchResponse } from "../type";
import { fetchSearchResponse } from "../api/search-api-repository";

export const useResponseSearch = (props: { q: string }) => {
  const [data, setData] = useState<ISearchResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);
      const result = await fetchSearchResponse({
        q: props.q,
      });
      setData(result);
    } catch (err) {
      setError(true);
      console.error("Error fetching most popular articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
    }, 500);
    return () => clearTimeout(timeout);
  }, [props.q]);

  return {
    data,
    loading,
    error,
  };
};
