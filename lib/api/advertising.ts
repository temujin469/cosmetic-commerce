import { groq } from "next-sanity";
import client from "../sanity";
import { Advertising } from "../../typings";

export const getAdvertising = async () => {
  const query = groq` *[_type=="advertising"]{_id,image,name}`;

  const advertising: Advertising[] = await client.fetch(query);
  return advertising;
};

