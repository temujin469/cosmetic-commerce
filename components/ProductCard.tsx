import Link from "next/link";
import React from "react";
import { Product } from "../typings";
import { brands } from "../utils/data";
export default function ProductCard({ product }: Product | any) {
  const brand = brands.find(
    (brand) => brand.id.toLowerCase() === product.brandId.toLocaleLowerCase()
  );
  return (
    <div className="card">
      <div className="relative">
        <Link href={`/product/${product.slug}`}>
          <a>
            <img
              src={product.images[0]}
              alt={product.name}
              className="shadow h-40 w-full object-cover"
            />
          </a>
        </Link>
        <Link href={`brand/${brand?.id}`}>
          <img
            src={brand?.image}
            alt={brand?.name}
            className="rounded-full h-10 w-10 absolute bottom-2 border-2 hover:border-primary left-2 object-cover hover:shadow-md"
          />
        </Link>
        {product.countInStock === 0 && (
          <span className="px-1 border-red-400 border-2 rounded bg-white text-red-400 absolute right-2 top-2">
            Дууссан
          </span>
        )}
      </div>
      <div className="flex flex-col items-center justify-center p-2">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>₮{product.price}</p>
      </div>
    </div>
  );
}
