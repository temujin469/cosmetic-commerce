import useSWR from "swr";
import { Brand } from "../typings";


export const useBrands = ()=>{
  const {data,error}= useSWR<Brand[]>('/api/brands');
  
  return {
    brands:data!,
    error
  }
}

export const useBrandBySlug = (slug:string,initData:Brand)=>{
  const {data,error}= useSWR<Brand>(`/api/brands/${slug}`,{fallbackData:initData});
  
  return {
    brand:data!,
    error
  }
}

