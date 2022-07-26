import useSWR from "swr";
import { Category } from "../typings";


export const useCategories = ()=>{
  const {data,error}= useSWR<Category[]>('/api/categories');
  
  return {
    categories:data!,
    error
  }
}

