import { GetStaticProps, GetServerSideProps } from "next";
import Banner from "../components/advertising";
import Categories from "../components/BrandsCat";
import Layout from "../components/Layout";
import ProductWrapper from "../components/ProductWrapper";
import SearchInput from "../components/SearchInput";
import { Brand, Product,Advertising, Category } from "../typings";
import { getProducts } from "../util/product";
import { getBrands } from "../util/brand";
import { getAdvertising } from "../util/advertising";
import { getCategories } from "../util/category";

type Props = {
  products:Product[],
  brands:Brand[],
  advertisingData:Advertising[]
  categories:Category[];
};

const Home = ({ products,brands,advertisingData,categories }: Props) => {

  return (
    <Layout>
      <div className="sm:hidden m-3">
        <SearchInput />
      </div>
      <Banner advertisingData={advertisingData}/>
      <Categories brands={brands}/>
      <ProductWrapper products={products} categories={categories}/>
    </Layout>
  );
};

export default Home;

export const getStaticProps:GetStaticProps = async () => {
  const products:Product[] = await getProducts();
  const brands:Brand[] = await getBrands();
  const advertisingData:Advertising[] = await getAdvertising();
  const categories:Category[] = await getCategories()

  return {
    props: {
      products,
      brands,
      advertisingData,
      categories
    },
  };
};
