import {
  HeartIcon,
  MenuIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/store";
import NavLink from "./NavLink";
import SearchInput from "../SearchInput";
import SideBar from "../sidebar/SideBar";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cartItems } = useAppSelector(
    (state) => state.cartReducer
  );
  const [cartItemsQuant, setCartItemQuant] = useState<number>(0);

  useEffect(() => {
    setCartItemQuant(cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cartItems]);

  return (
    <nav>
      <div
        className={`fixed w-full z-20 drop-shadow flex h-16 md:h-20 px-5 justify-between items-center bg-white select-none`}
      >
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon className="w-8 h-8" />
        </button>
        <Link href="/">
          <a className="font-bold text-lg">Нүүр хуудас</a>
        </Link>
        <div className="hidden sm:inline-block sm:w-[280px] md:w-[310px] lg:w-[450px]">
          <SearchInput />
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
              {cartItemsQuant !== 0 && (
                <span className="absolute right-[5px] top-[-5px] text-primary">
                  {cartItemsQuant}
                </span>
              )}
            </a>
          </Link>
          <Link href="#">
            <a>
              <NavLink Icon={UserIcon} name="Бүртгүүлэх" />
            </a>
          </Link>
        </div>
      </div>
      <div>
        <SideBar open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
