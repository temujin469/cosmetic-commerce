import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "../store/store";
import NavLink from "./NavLink";

const Navbar = () => {
  const { cartItemsQuantity } = useAppSelector((state) => state.cartReducer);
  const [fixed, setFixed] = useState<boolean>(false);

  globalThis.onscroll = () => {
    if (window.scrollY > 230 || window.scrollY === 0) {
      return setFixed(false);
    } else {
      return setFixed(true);
    }
  };

  return (
    <nav
      className={`top-0 left-0 w-full z-20 drop-shadow flex h-16 md:h-20 px-5 justify-between items-center bg-white select-none
    ${fixed ? "fixed" : "absolute"}
    `}
    >
      <MenuIcon className="w-7 h-7 md:hidden" />
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
            <NavLink Icon={ShoppingCartIcon} name="Сагс" />
            <span className="absolute translate-x-[50%] right-[50%] top-[-10px] text-primary">{cartItemsQuantity}</span>
          </a>
        </Link>
        <Link href="#">
          <a>
            <NavLink Icon={UserIcon} name="Бүртгүүлэх" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
