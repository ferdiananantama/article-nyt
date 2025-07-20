"use client";
import { useEffect, useState } from "react";
import { IMostPopulerArticles } from "../type";
import { fetchMostPopuler } from "../api/most-populer-api-repository";

export const useMostPopuler = () => {
  const [data, setData] = useState<IMostPopulerArticles>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);
      const result = await fetchMostPopuler();
      setData(result);
    } catch (err) {
      setError(true);
      console.error("Error fetching most popular articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};
