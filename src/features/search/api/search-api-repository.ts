import axios from "axios";
import { ISearchResponse } from "../type";

export const fetchSearchResponse = async (props: {
  q: string;
}): Promise<ISearchResponse> => {
  const res = await axios.get(
    "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    {
      params: {
        "api-key": process.env.NEXT_PUBLIC_NYT_API_KEY,
        q: props.q,
      },
    }
  );
  return res.data;
};
