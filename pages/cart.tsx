import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useAppSelector } from "../store/store";
import Image from "next/image";
import { useRouter } from "next/router";
import CartItem from "../components/CartItem";
import dynamic from "next/dynamic";

function Cart() {
  const { cartItems} = useAppSelector(
    (state) => state.cartReducer
  );
  const router = useRouter();
  
  const totalPrice:number = cartItems.reduce(
    (a, b) => a + b.quantity * b.price,
    0
  );

  const totalCost:number = totalPrice + 0

  const cartItemsQuantity:number = cartItems.reduce((a,b)=>a + b.quantity ,0 );

  

  const sumbitOrder = () => {
    router.push("/shipping");
  };

  return (
    <Layout title="Таний сагс">
      <div className="mt-0 p-5">
        {cartItems.length === 0 ? (
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
                {cartItems.map((cartItem) => (
                  <CartItem cartItem={cartItem} key={cartItem.slug} />
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
                  <button className="rounded-r text-primary bg-gray-200 h-full px-2">
                    Хямдруул
                  </button>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Барааны нийт үнэ</p>
                  <p className="text-xl text-gray-900">{totalPrice}₮</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Барааны тоо</p>
                  <p className="text-xl text-gray-900">{cartItemsQuantity}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-800">Хөнгөлөлт</p>
                  <p className="text-xl text-gray-900">0</p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <p className="text-2xl text-gray-800">Нийт төлөх</p>
                  <p className="text-2xl text-primary">{totalCost}₮</p>
                </div>
                <button className="primary-button" onClick={sumbitOrder}>
                  Захиалах
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default dynamic(()=>Promise.resolve(Cart),{ssr:false});
