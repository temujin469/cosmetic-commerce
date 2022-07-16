import {
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { categories } from "../utils/data";
import SubMenu from "./SubMenu";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ open, setOpen }: Props) {
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
        {categories.map((cat) => (
          <SubMenu category={cat} key={cat.slug} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
