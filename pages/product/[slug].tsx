import React, { useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { addToCart } from "../../store/slices/cartSlice";
import { CartItem, Option, Product } from "../../typings";
import { useAppDispatch } from "../../store/store";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";
import Collapse from "../../components/Collapse";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getProductBySlug, getProducts } from "../../lib/api/product";
import { urlFor } from "../../utils/imageOptimize";
import ProductImageSlider from "../../components/ProductImageSlider";
import { useProductBySlug } from "../../hooks/useProducts";
import { useRouter } from "next/router";

type Props = {
  initProduct: Product;
};
  
// const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
// const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

function ProductScreen({ initProduct }: Props) {
  const { query } = useRouter();

  const { product } = useProductBySlug(query.slug as string, initProduct);

  const [quantity, setQuantity] = useState<number>(1);
  // const [option, setOption] = useState<Option>(product.defaultOption);
  const [selectedOption,setSelectedOption] = useState<Option>(product.defaultOption);

  const allOptions = product.options
    ? [product.defaultOption, ...product.options]
    : [product.defaultOption];

  if (!product) {
    return <div>fending</div>;
  }
  const handleQuantity = (state: string) => {
    if (state === "NEMEH" && quantity < selectedOption.countInStock) {
      setQuantity((x) => (x += 1));
    } else if (state === "HASAH" && quantity > 1) {
      setQuantity((x) => (x -= 1));
    } else if (quantity === selectedOption.countInStock) {
      toast.error(`Нөөц хүрэлцэхгүй байна`);
    } else return;
  };
  const dispatch = useAppDispatch();

  const addToCartHandle = () => {
    if (selectedOption.countInStock != 0) {
      const cartItem: CartItem = {
        slug: product.slug,
        image: urlFor(product.thumbnail).width(180).height(180).url(),
        productName: product.name,
        price: selectedOption.price,
        optionName: selectedOption.name,
        countInStock: selectedOption.countInStock,
        brand: {
          slug: product.brand.slug,
          name: product.brand.name,
          logo: urlFor(product.brand.logo).width(40).height(40).url(),
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
  const handleSelect = (index:number)=> {
    setSelectedOption(allOptions[index]);
    // set
  }

  return (
    <Layout title={product.name}>
      <div className="p-2">
        <Link href="/">Буцах</Link>
      </div>
      <div className="grid sm:grid-cols-4 gap-5 md:gap-10 lg:gap-20 bg-white p-4">
        <div className="sm:col-span-2 h-fit">
          <div className="grid grid-cols-1 rounded-md overflow-hidden">
            <ProductImageSlider images={product.images} />
          </div>
          <div className="flex items-center gap-2 md:gap-4 pt-2">
            {allOptions.map((option, i) => (
              <button
                className="saaral-button"
                key={i}
                onClick={()=>handleSelect(i)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:col-span-2">
          <ul className="space-y-1">
            <li className="flex items-center space-x-2">
              <Link href={`../brand/${product.brand.slug}`}>
                <a>
                  <img
                    className="w-10 h-10 rounded-full border-2 object-cover"
                    src={urlFor(product.brand.logo)
                      .width(200)
                      .height(200)
                      .url()}
                    alt={product.brand.name}
                  />
                </a>
              </Link>
              <h1 className="text-lg md:text-xl m-0">{product.brand.name}</h1>
            </li>
            <li>
              <h1 className="md:text-2xl text-xl font-medium text-gray-800">
                {`${product.name}`}
              </h1>
            </li>
            <li>
              <h1 className="md:text-2xl text-xl font-medium text-primary">
                ₮{selectedOption.price}
              </h1>
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
                disabled={selectedOption.countInStock === 0}
                className="primary-button flex-1 disabled:bg-primary/70"
                onClick={addToCartHandle}
              >
                <p className="m-0">
                  {selectedOption.countInStock === 0
                    ? "бүтээгдэхүүн дууссан"
                    : "Сагсанд хийх"}
                </p>
              </button>
              <button className="saaral-button font-medium flex justify-center items-center gap-2 flex-1">
                <HeartIcon className="w-7 h-7" /> Хадгалах
              </button>
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

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const product: Product = await getProductBySlug(slug);

  return {
    props: {
      initProduct: product,
    },
  };
};

// export default dynamic(()=>Promise.resolve(ProductScreen),{ssr:false});

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await getProducts();

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),

    fallback: false,
  };
};
