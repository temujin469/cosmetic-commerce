import Link from "next/link";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAppDispatch, useAppSelector } from "../store/store";
import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import { removeCartItem } from "../store/slices/cartSlice";
import Image from "next/image";

function cart() {
  const [quantity, setQuantity] = useState<number>(1);
  const { cartItems, cartItemsQuantity } = useAppSelector(
    (state) => state.cartReducer
  );

  const dispatch = useAppDispatch();
  const removeItemHandler = (slug: string) => {
    removeCartItem(dispatch, slug);
  };

  return (
    <Layout title="Таний сагс">
      <div className="mt-0 p-5">
        {cartItemsQuantity === 0 ? (
          <div className="flex flex-col items-center">
            <div className="">
              <Image src="/images/empty.png" width={500} height={500} />
            </div>
            <div className="flex flex-col gap-3 w-full text-center">
              <p>Таны сагс хоосон байна</p>
              <Link href="/">
                <a>
                  <button className="primary-button w-full">Нүүр хуудас</button>
                </a>
              </Link>{" "}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-5">
            <div className="md:col-span-3 bg-white rounded-md p-5 border h-fit">
              <h1 className="text-xl font-md text-gray-800 mb-5">
                Барааны жагсаалт
              </h1>
              <div className="flex flex-col gap-2">
                {cartItems.map((item) => (
                  <div key={item.slug} className="flex gap-2 border-b pb-2">
                    <Link href={`product/${item.slug}`}>
                      <img
                        className="w-24 h-24 rounded-md bborder object-cover cursor-pointer"
                        src={item.image}
                      />
                    </Link>
                    <div className="flex flex-col justify-between flex-1">
                      <div className="flex justify-between items-center">
                        <Link href={`brand/${item.brand.id}`}>
                          <img
                            className="w-7 h-7 rounded-full border-2 object-cover"
                            src={item.brand.image}
                            alt={item.brand.name}
                          />
                        </Link>
                        <button
                          onClick={() => removeItemHandler(item.slug)}
                          className="jijig-saaral-button"
                        >
                          <XIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-start items-center">
                        <p className="text-xl text-gray-800">{item.name}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xl text-gray-800">₮{item.price}</p>
                        <div className="flex items-center border justify-between max-w-[200px] rounded">
                          <button
                            className="md:text-2xl hover:bg-white text-xl bg-gray-200 h-7 w-7 flex items-center justify-center"
                            // onClick={() => handleQuantity("NEMEH")}
                          >
                            <PlusIcon className="h-5 w-5" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <button
                            className="md:text-2xl text-xl hover:bg-white bg-gray-200 h-7 w-7 flex items-center justify-center"
                            // onClick={() => handleQuantity("HASAH")}
                          >
                            <MinusIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-white rounded-md p-5 border">
              <h1 className="text-xl font-md text-gray-800 mb-5">
                Сагсны мэдээлэл
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center h-12 border-primary border-2 rounded-md">
                  <input
                    className="rounded-l outline-none w-full px-2"
                    placeholder="Промо код оруулах"
                  />
                  <button className="rounded-r bg-gray-200 h-full px-2">
                    Ашиглах
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2>Хүргэлт</h2>
                    <p className="pr-3">100,000₮-с дээш хүргэлт үнэгүй</p>
                  </div>
                  <p className="text-xl text-gray-900">4000</p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Барааны нийт үнэ</p>
                  <p className="text-xl text-gray-900">4000₮</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Барааны тоо</p>
                  <p className="text-xl text-gray-900">{cartItemsQuantity}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Хөнгөлөлт</p>
                  <p className="text-xl text-gray-900">0</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Хүргэлтийн төлбөр</p>
                  <p className="text-xl text-gray-900">4000</p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <p className="text-2xl text-gray-800">Нийт төлөх</p>
                  <p className="text-2xl text-primary">8000₮</p>
                </div>
                <button className="primary-button">Захиалах</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default cart;
