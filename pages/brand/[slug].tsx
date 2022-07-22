import { GetServerSideProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getBrandBySlug } from "../../api/brand";
import { getProductsByBrand } from "../../api/product";
import Layout from "../../components/Layout";
import ProductsContainer from "../../components/ProductsSliderContainer";
import { Brand, Product } from "../../typings";
import { urlFor } from "../../utils/imageOptimize";

type Props = {
  products:Product[]
  brand:Brand
}

function brandScreen({products,brand}:Props) {

  return (
    <Layout title={brand.name}>
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
            src={urlFor(brand.logo).width(200).height(200).url()}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <p className="m-0">{brand.name}</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4">
          <h1 className="md:text-2xl font-semibold text-gray-800 py-4 space-x-2 m-0">
            <p className="hidden md:inline-block m-0">Нийт барааны тоо</p>
            <p className="md:hidden inline-block m-0">Нийт Бараа</p>
            <span className="text-primary">{products.length}</span>
          </h1>
          <select
            name="cars"
            id="cars"
            className="rounded-md border p-3 outline-none font-medium bg-gray-100"
          >
            <option value="volvo">Шинэ эхэндээ</option>
            <option value="saab">Хуучин эхэндээ</option>
            <option value="mercedes">Үнэ өсөхөөр </option>
            <option value="audi">Үнэ Буурахаар</option>
          </select>
        </div>
        <hr />
        <div className="p-5 min-h-screen">
          <ProductsContainer products={products} />
        </div>
      </div>
    </Layout>
  );
}

export default brandScreen;

interface IParams extends ParsedUrlQuery {
  slug: string
}


export const getServerSideProps:GetServerSideProps = async (context) => {
  const {slug } = context.params as IParams;
  const brand:Brand = await getBrandBySlug(slug)
  const products:Product[] = await getProductsByBrand(slug)

  return {
    props:{
      brand,
      products
    }
  }
}
