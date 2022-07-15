import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import ProductsContainer from "../../components/ProductsContainer";
import { Product } from "../../typings";
import { brands, products } from "../../utils/data";

function brandScreen() {
  const { query } = useRouter();
  const { brandId } = query;
  const brand = brands.find((brand) => brand.id === brandId);
  const brandProducts: Product[] = products.filter(
    (product) => product.brandId.toLowerCase() === brand?.id
  );
  return (
    <Layout title={brand?.name}>
      <div className="p-4 relative">
        <Image
          className="object-cover overflow-hidden"
          src={"/images/brand-background.jpg"}
          width={200}
          height={80}
          layout="responsive"
        />
        <div className="left-5 bottom-5 text-white text-lg md:text-2xl md:left-8 md:bottom-8 absolute bg-black/20 flex items-center space-x-4 p-2 md:p-3 rounded">
          <img
            src={brand?.image}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          />
          <p>{brand?.name}</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4">
          <h1 className="md:text-2xl font-semibold text-gray-800 py-4 space-x-2">
            <p className="hidden md:inline-block">Нийт барааны тоо</p>
            <p className="md:hidden inline-block">Нийт Бараа</p>
            <span className="text-primary">{brandProducts.length}</span>
          </h1>
          <select
            name="cars"
            id="cars"
            className="rounded-md border p-3 outline-none bg-gray-100"
          >
            <option value="volvo">Шинэ эхэндээ</option>
            <option value="saab">Хуучин эхэндээ</option>
            <option value="mercedes">Үнэ өсөхөөр </option>
            <option value="audi">Үнэ Буурахаар</option>
          </select>
        </div>
        <hr />
        <div className="p-5 min-h-screen">
          <ProductsContainer products={brandProducts} />
        </div>
      </div>
    </Layout>
  );
}

export default brandScreen;
