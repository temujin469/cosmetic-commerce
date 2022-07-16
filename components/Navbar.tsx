import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "../store/store";
import NavLink from "./NavLink";
import SideBar from "./SideBar";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cartItemsQuantity } = useAppSelector((state) => state.cartReducer);
  // const [fixed, setFixed] = useState<boolean>(false);

  // globalThis.onscroll = () => {
  //   if (window.scrollY > 230 || window.scrollY === 0) {
  //     return setFixed(false);
  //   } else {
  //     return setFixed(true);
  //   }
  // };

  return (
    <nav>
      <div
        className={`fixed w-full z-20 drop-shadow flex h-16 md:h-20 px-5 justify-between items-center bg-white select-none`}
      >
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          <MenuIcon className="w-8 h-8"/>
        </button>
        <Link href="/">
          <a className="font-bold text-lg">Нүүр хуудас</a>
        </Link>
        <div className="bg-gray-100 rounded-md items-center px-4 py-3 hidden md:flex md:w-[300px] lg:w-[450px]">
          <input
            placeholder="Та юу хайж байна вэ?"
            className="outline-none bg-transparent w-full"
          />
          <SearchIcon className="w-7 h-7 cursor-pointer text-gray-600" />
        </div>
        <div className="flex space-x-2 md:space-x-6 items-center">
          <Link href="#">
            <a>
              <NavLink Icon={HeartIcon} name="Хадгалсан" />
            </a>
          </Link>
          <Link href="/cart">
            <a className="relative">
              <NavLink Icon={ShoppingBagIcon} name="Сагс" />
              <span className="absolute right-[5px] top-[-5px] text-primary">
                {cartItemsQuantity}
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <NavLink Icon={UserIcon} name="Бүртгүүлэх" />
            </a>
          </Link>
        </div>
      </div>
      <div >
        <SideBar open={open} setOpen={setOpen}/>
      </div>
    </nav>
  );
};

export default Navbar;
