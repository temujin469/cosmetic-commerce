import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { categories, products as Products } from "../utils/data";
import ProductsContainer from "./ProductsContainer";

function ProductWrapper() {
  const filteredProducts = (catId: string) => {
    return Products.filter((product) => product.catId.toLowerCase() === catId);
  };

  return (
    <div className="bg-white pt-0 p-5">
      {categories.map((cat) => {
        const products = filteredProducts(cat.id);

        if (products.length > 0) {
          return (
            <div key={cat.id}>
              <div className="flex items-center gap-3 pb-3 group">
                <h1 className="text-xl md:text-2xl text-gray-800 font-medium">
                  {cat.name}
                </h1>
                <ArrowRightIcon className="w-5 h-5  group-hover:text-primary"/>
              </div>
              <div>
                <ProductsContainer products={products} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProductWrapper;
