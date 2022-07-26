import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getBrandBySlug, getBrands } from "../../lib/api/brand";
import { getProductsByBrand } from "../../lib/api/product";
import Layout from "../../components/Layout";
import ProductsContainer from "../../components/ProductsSliderContainer";
import { Brand, Product } from "../../typings";
import { urlFor } from "../../utils/imageOptimize";
import { useProductsByBrand } from "../../hooks/useProducts";
import { useRouter } from "next/router";
import { useBrandBySlug } from "../../hooks/useBrands";

type Props = {
  initProducts: Product[];
  initBrand: Brand;
};

function brandScreen({ initBrand, initProducts }: Props) {
  const { query } = useRouter();
  const { products } = useProductsByBrand(query.slug as string,initProducts);
  const { brand } = useBrandBySlug(query.slug as string, initBrand);

  return (
    <Layout title={brand.name}>
      <div className="p-4 relative h-[200px] md:h-[300px] lg:h-[400px]">
        {brand.backgroundImage && (
          <img
            className="object-cover overflow-hidden h-full w-full"
            src={urlFor(brand.backgroundImage).url()}
          />
        )}
        <div className="left-7 bottom-7 text-white text-lg md:text-2xl md:left-8 md:bottom-8 absolute bg-black/20 flex items-center space-x-4 p-2 md:p-3 rounded">
          <img
            src={urlFor(brand.logo).width(100).height(100).url()}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            alt={brand.name}
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
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const products = await getProductsByBrand(slug);
  const brand = await getBrandBySlug(slug);

  return {
    props: {
      initProducts: products,
      initBrand: brand,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const brands: Brand[] = await getBrands();

  return {
    paths: brands.map((brand) => ({ params: { slug: brand.slug } })),

    fallback: false,
  };
};
