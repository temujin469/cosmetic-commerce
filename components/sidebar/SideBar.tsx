import {
  XIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getCategories } from "../../lib/api/category";
import { Category } from "../../typings";
// import { categories } from "../utils/data";
import SubMenu from "./SubMenu";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ open, setOpen }: Props) {

  const [categories,setCategories] = useState<Category[]>([]);


  useEffect(()=>{
    const fetchData = async ()=>{
      const categories:Category[] = await getCategories()
      setCategories(categories);
    }

    fetchData()
  },[])
  return (
    <div
      className={classNames(
        "w-[300px] select-none transition-all duration-300 min-h-screen absolute left-[-100%] top-0 z-50 overflow-y-scroll bg-white",
        { "left-[0]": open }
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-lg font-medium">Онлайн дэлгүүр</h1>
        <button onClick={() => setOpen(false)}>
          <XIcon className="w-7 h-7" />
        </button>
      </div>
      <div className="flex flex-col">
        {categories.map((category) => (
          <SubMenu  category={category} key={category.slug} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
