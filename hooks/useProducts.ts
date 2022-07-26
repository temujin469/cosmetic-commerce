import useSWR from "swr";
import { Product } from "../typings";


export const useProducts = (initData:Product[] | undefined)=>{
  const {data,error}= useSWR<Product[]>('/api/products',{fallbackData:initData});
  
  return {
    products:data!,
    error
  }
}

export const useProductBySlug = (slug:string,initData:Product)=>{
  const {data,error}= useSWR<Product>(`/api/products/${slug}`,{fallbackData:initData});
  
  return {
    product:data!,
    error
  }
}

export const useProductsByBrand = (slug:string,initData:Product[])=>{
  const {data,error}= useSWR<Product[]>(`/api/products/brand/${slug}`,{fallbackData:initData});
  
  return {
    products:data!,
    error
  }
}

