import { GetStaticProps, GetServerSideProps } from "next";
import Banner from "../components/advertising";
import BrandCategories from "../components/BrandsCat";
import Layout from "../components/Layout";
import ProductWrapper from "../components/ProductWrapper";
import SearchInput from "../components/SearchInput";
import { Brand, Product, Advertising, Category } from "../typings";
import { getProducts } from "../lib/api/product";
import { getBrands } from "../lib/api/brand";
import { getAdvertising } from "../lib/api/advertising";
import { getCategories } from "../lib/api/category";
import { SWRConfig } from "swr";

type Props = {
  fallback:{}
  advertisingData: Advertising[];
};

const Home = ({fallback, advertisingData}: Props) => {
  return (
    <SWRConfig value={{fallback}}>
      <Layout>
        <div className="sm:hidden m-3">
          <SearchInput />
        </div>
        <Banner advertisingData={advertisingData} />
        <BrandCategories/>
        <ProductWrapper/>
      </Layout>
    </SWRConfig>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await getProducts();
  const brands: Brand[] = await getBrands();
  const advertisingData: Advertising[] = await getAdvertising();
  const categories: Category[] = await getCategories();

  return {
    props: {
      fallback: {
        "/api/products": products,
        "/api/brands" : brands,
        "/api/categories": categories,
      },
      advertisingData,
    },
  };
};
