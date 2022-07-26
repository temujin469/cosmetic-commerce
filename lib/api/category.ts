import { groq } from "next-sanity";
import client from "../sanity";
import { Category } from "../../typings";

export const getCategories = async () => {
  const query = groq`*[_type == "cosmeticCategories"]{
    name,
    "slug":slug.current,
    "subCategories":subCategory[]->{name,"slug":slug.current}
  }`;

  const categories: Category[] = await client.fetch(query);
  return categories;
};

export const getCategoryBySLug = async (slug: string) => {
  const query = groq`*[_type == "cosmeticCategories" && slug.current == $slug]{
  'slug':slug.current,
  backgroundImage,
  logo,
  name
  }`;

  const brands: Category[] = await client.fetch(query, { slug });
  return brands[0];
};
