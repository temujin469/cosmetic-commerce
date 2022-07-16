import { useRouter } from "next/router";
import React, { useState } from "react";
import { brands, products } from "../../utils/data";
import classNames from "classnames";
import Layout from "../../components/Layout";
import Link from "next/link";
// import Image from "next/image";
import { addToCart } from "../../store/slices/cartSlice";
import { CartItem } from "../../typings";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";
import Collapse from "../../components/Collapse";
function ProductScreen() {
  const [quantity, setQuantity] = useState<number>(1);
  const { query } = useRouter();
  const { slug } = query;
  const product = products.find((product) => product.slug === slug);
  const brand = brands.find(
    (brand) => brand.id === product?.brandId.toLocaleLowerCase()
  );

  const { loading } = useAppSelector((state) => state.cartReducer);

  if (!product) {
    return <div>product not found</div>;
  }

  const handleQuantity = (state: string) => {
    if (state === "NEMEH" && quantity < product.countInStock) {
      setQuantity((x) => (x += 1));
    } else if (state === "HASAH" && quantity > 1) {
      setQuantity((x) => (x -= 1));
    } else return;
  };
  const dispatch = useAppDispatch();
  const addToCartHandle = () => {
    if (product.countInStock != 0) {
      const cartItem: CartItem = {
        slug: product.slug,
        image: product.images[0],
        price: product.price,
        name: product.name,
        brand: {
          id: brand?.id,
          name: brand?.name,
          image: brand?.image,
        },
        quantity,
      };
      addToCart(dispatch, cartItem);
      return toast.success("Сагсанд амжилттай нэмэгдлээ", {
        style: {
          border: "1px solid green",
          padding: "16px",
          color: "green",
        },
      });
    } else {
      return toast.error("Энэ бүтээгдхүүн дууссан байна", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
        },
      });
    }
  };
  return (
    <Layout title={product.name}>
      <div className="p-2">
        <Link href="/">Буцах</Link>
      </div>
      <div className="grid sm:grid-cols-4 gap-5 md:gap-10 lg:gap-20 bg-white p-4">
        <div className="sm:col-span-2 h-fit">
          {/* <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          /> */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="max-w-[500px] w-full max-h-80 sm:max-h-[320px] md:max-h-96 lg:max-h-[550px] overflow-hidden border lg:border-2 rounded-md sm:p-2 lg:p-5 object-cover"
          />
          <div className="flex items-center gap-2 md:gap-4">
            {product.images.map((image, i) => (
              <img
                src={image}
                key={i}
                alt="product-images"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-2 md:mt-4 border rounded-md object-cover"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:col-span-2">
          <ul className="space-y-1">
            <li className="flex items-center space-x-2">
              <Link href={`brand/${brand?.id}`}>
                <a>
                  <img
                    className="w-10 h-10 rounded-full border-2 object-cover"
                    src={brand?.image}
                    alt={brand?.name}
                  />
                </a>
              </Link>
              <h1 className="text-lg md:text-xl">{brand?.name}</h1>
            </li>
            <li>
              <h1 className="md:text-2xl text-xl font-medium text-gray-800">
                {product.name}
              </h1>
            </li>
            <li>
              <h1 className="md:text-2xl text-xl font-medium text-gray-800">
                ₮{product.price}
              </h1>
            </li>
            <li>
              {product.countInStock ? (
                <h1 className="md:text-2xl text-xl font-medium text-gray-800">
                  {product.countInStock} Ширхэг үлдсэн
                </h1>
              ) : (
                <h1 className="md:text-2xl text-lg font-medium text-red-500">
                  Бүтээгдэхүүн дууссан
                </h1>
              )}
            </li>
          </ul>
          <div className="space-y-4 border-y py-4">
            <div>
              <p className="text-lg font-medium text-gray-800 mb-2">
                Тоо ширхэг
              </p>
              <div className="flex items-center justify-between max-w-[150px] border rounded-md">
                <button
                  className="md:text-2xl text-xl hover:bg-gray-100 bg-gray-200 h-12 w-12 flex items-center justify-center"
                  onClick={() => handleQuantity("NEMEH")}
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
                <span className="w-12 h-12 flex items-center justify-center selection:bg-none">
                  {quantity}
                </span>
                <button
                  className="md:text-2xl text-xl bg-gray-200 hover:bg-gray-100 h-12 w-12 flex items-center justify-center"
                  onClick={() => handleQuantity("HASAH")}
                >
                  <MinusIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="gap-4 flex flex-col md:flex-row">
              <button
                disabled={loading}
                className={classNames("primary-button flex-1", {
                  "cursor-progress": loading,
                })}
                onClick={addToCartHandle}
              >
                <p>Сагсанд хийх</p>
              </button>
              <button className="saaral-button flex-1">Хадгалах</button>
            </div>
          </div>
          <div>
            <Collapse title="Барааны тухай" content={product.description} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductScreen;
