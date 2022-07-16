import { XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { Dispatch, SetStateAction } from "react";
import { categories } from "../utils/data";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ open, setOpen }: Props) {
  return (
    <div className={classNames("w-[300px] select-none transition-all duration-300 min-h-screen absolute left-[-100%] top-0 z-50 overflow-y-scroll bg-white p-4",{"left-[0]":open})}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Онлайн дэлгүүр</h1>
        <button onClick={()=>setOpen(false)}>
          <XIcon className="w-7 h-7" />
        </button>
      </div>
      <div className="flex flex-col p-4 gap-3">
        {categories.map(cat=>(
          <p key={cat.id} className="text-lg font-medium">{cat.name}</p>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
