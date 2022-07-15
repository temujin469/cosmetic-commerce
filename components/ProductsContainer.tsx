import React from "react";
import { Product } from "../typings";
import ProductCard from "./ProductCard";

interface Props {
  products:Product[]
}

function ProductsContainer({products}:Props) {
  return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {products?.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
  );
}

export default ProductsContainer;
