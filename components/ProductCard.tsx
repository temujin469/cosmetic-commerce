import Link from "next/link";
import React from "react";
import { Product } from "../typings";
import { urlFor } from "../utils/imageOptimize";
type Prop = {
  product:Product
}
export default function ProductCard({ product }: Prop) {
  return (
    <div className="card">
      <div className="relative">
        <Link href={`/product/${product.slug}`}>
          <a>
            <img
              src={urlFor(product.thumbnail).width(300).height(300).url()}
              alt={product.name}
              className="shadow h-[140px] md:h-[180px] lg:h-[270px] w-full object-cover"
            />
          </a>
        </Link>
        <Link href={`../brand/${product.brand.slug}`}>
          <img
            src={urlFor(product.brand.logo).width(50).height(50).url()}
            alt={product.brand.name}
            className="rounded-full h-10 w-10 absolute bottom-2 border-2 hover:border-primary left-2 object-cover hover:shadow-md"
          />
        </Link>
        {product.defaultOption.countInStock === 0 && (
          <span className="px-1 border-red-400 border-2 rounded bg-white text-red-400 absolute right-2 top-2">
            Дууссан
          </span>
        )}
      </div>
      <div className="flex flex-col items-center justify-center p-2">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg md:text-xl">{product.name.length > 14 ? product.name.slice(0,14)+"...":product.name}</h2>
          </a>
        </Link>
        <p className="text-lg text-primary m-0">₮{product.defaultOption.price}</p>
      </div>
    </div>
  );
}
