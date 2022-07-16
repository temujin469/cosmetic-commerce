import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { addToCart, removeCartItem } from "../store/slices/cartSlice";
import { useAppDispatch } from "../store/store";
import { CartItem } from "../typings";

interface Prop {
  cartItem: CartItem;
}

function CartItem({ cartItem }: Prop) {
  const [quantity, setQuantity] = useState<number>(cartItem.quantity);
  const dispatch = useAppDispatch();

  const updateCartItemQuantity = () => {
    const newCartItem = {...cartItem,quantity}
    addToCart(dispatch, newCartItem);
  };


  const handleQuantity = (state: string) => {
    if (state === "NEMEH" && quantity <= cartItem.countInStock) {
      setQuantity((x) => (x += 1));
      updateCartItemQuantity();
    } else if (state === "HASAH" && quantity > 1) {
      setQuantity((x) => (x -= 1));
      updateCartItemQuantity();
    } else if (cartItem.countInStock === 0) {
      toast.error(`Нөөц хүрэлцэхгүй байна`);
    } else {
      toast.error(`${cartItem.countInStock}-с дээш нөөц хүрэлцэхгүй байна`);
    }
  };

  const removeCartItemHandler = (slug: string) => {
    removeCartItem(dispatch, slug);
  };

  return (
    <div key={cartItem.slug} className="flex gap-2 border-b pb-2">
      <Link href={`product/${cartItem.slug}`}>
        <img
          className="w-24 h-24 rounded-md bborder object-cover cursor-pointer"
          src={cartItem.image}
        />
      </Link>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-center">
          <Link href={`brand/${cartItem.brand.id}`}>
            <img
              className="w-7 h-7 rounded-full border-2 object-cover"
              src={cartItem.brand.image}
              alt={cartItem.brand.name}
            />
          </Link>
          <button
            onClick={() => removeCartItemHandler(cartItem.slug)}
            className="jijig-saaral-button"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-start items-center">
          <p className="text-xl text-gray-800">{cartItem.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl text-gray-800">{cartItem.price}₮</p>
          <div className="flex items-center border justify-between max-w-[200px] rounded">
            <button
              className="md:text-2xl hover:bg-white text-xl bg-gray-200 h-7 w-7 flex items-center justify-center"
              onClick={() => handleQuantity("NEMEH")}
            >
              <PlusIcon className="h-5 w-5" />
            </button>
            <span className="w-7 h-7 flex items-center justify-center">
              {cartItem.quantity}
            </span>
            <button
              className="md:text-2xl text-xl hover:bg-white bg-gray-200 h-7 w-7 flex items-center justify-center"
              onClick={() => handleQuantity("HASAH")}
            >
              <MinusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;