import { groq } from "next-sanity";
import client from "../lib/sanity";
import { Brand } from "../typings";

export const getBrands = async () => {
  const query = groq`*[_type == "cosmeticBrands"]{
  'slug':slug.current,
  backgroundImage,
  logo,
  name
  }`;

  const brands: Brand[] = await client.fetch(query);
  return brands;
};

export const getBrandBySlug = async (slug:string) => {
  const query = groq`*[_type == "cosmeticBrands" && slug.current == $slug]{
  'slug':slug.current,
  backgroundImage,
  logo,
  name
  }`;

  const brands: Brand[] = await client.fetch(query,{slug});
  return brands[0];
};
