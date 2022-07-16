import React, { useEffect } from "react";
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
              <div>
                <h1 className="text-xl md:text-2xl text-gray-800 font-medium pb-3">
                  {cat.name}
                </h1>
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
