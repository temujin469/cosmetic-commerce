import { groq } from "next-sanity";
import client from "../lib/sanity";
import { Product } from "../typings";

export const getProducts = async () => {

  const query = groq`*[_type=="cosmetic"]|order(_updatedAt){
    "brand":brand->{"logo":logo.asset->,name,"slug":slug.current},
    "subCategory":category->{"slug":slug.current,name},
    "category":category->parentCategory->{"slug":slug.current,name},
    "slug":slug.current,
    "defaultOption":defaultOption{countInStock,name,price,discount},
    "options":options[]{countInStock,name,price,discount},
    thumbnail,
    images,
    description,
    name,
  }`;

  const products:Product[] = await client.fetch(query);
  return products;
};

export const getProductBySlug = async (slug:string) => {

  const query = groq`*[_type=="cosmetic"]|order(_updatedAt){
    "brand":brand->{"logo":logo.asset->,name,"slug":slug.current},
    "subCategory":category->{"slug":slug.current,name},
    "category":category->parentCategory->{"slug":slug.current,name},
    "slug":slug.current,
    "defaultOption":defaultOption{countInStock,name,price,discount},
    "options":options[]{countInStock,name,price,discount},
    thumbnail,
    images,
    description,
    name,
  }`;

  const products:Product[] = await client.fetch(query,{slug});
  return products[0];
};

export const getProductsByBrand = async (brandSlug:string) => {

  const query = groq`*[_type=="cosmetic" && brand->slug.current == $brandSlug ]|order(_updatedAt){
  "brand":brand->{"logo":logo.asset->,name,"slug":slug.current},
  "subCategory":category->{"slug":slug.current,name},
  "category":category->parentCategory->{"slug":slug.current,name},
  "slug":slug.current,
  "defaultOption":defaultOption{countInStock,name,price,discount},
  "options":options[]{countInStock,name,price,discount},
  thumbnail,
  images,
  description,
  isFeatured,
  name,
  tags
  }`;

  const products:Product[] = await client.fetch(query,{brandSlug});
  return products;
};
