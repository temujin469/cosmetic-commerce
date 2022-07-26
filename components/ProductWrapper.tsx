import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../typings";
import ProductsContainer from "./ProductsSliderContainer";
import { useCategories } from "../hooks/useCategories";


function ProductWrapper() {
  const { products } = useProducts();
  const { categories } = useCategories();

  const filter = (subCatSlug: string) => {
    return products?.filter(
      (product) => product.subCategory.slug === subCatSlug
    );
  };

  return (
    <div className="bg-white pt-0 p-5">
      {categories?.map((category) =>
        category.subCategories.map((subCat) => {
          const filteredProducts = filter(subCat.slug);
          return (
            <div key={category.slug}>
              <div className="flex items-center gap-3 pb-3 group">
                <h1 className="text-xl md:text-2xl text-gray-800 font-medium m-0">
                  {category.name}
                </h1>
                <ArrowRightIcon className="w-5 h-5  group-hover:text-primary" />
              </div>
              <div>
                  <ProductsContainer products={filteredProducts as Product[]} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProductWrapper;
