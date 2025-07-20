import axios from "axios";
import { IMostPopulerArticles } from "../type";

export const fetchMostPopuler = async (): Promise<IMostPopulerArticles> => {
  const res = await axios.get(
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json",
    {
      params: {
        "api-key": process.env.NEXT_PUBLIC_NYT_API_KEY,
      },
    }
  );
  return res.data;
};
