import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "../typings";
import ProductCard from "./ProductCard";
// import { Navigation } from "swiper";

interface Props {
  products: Product[];
}

function ProductsContainer({ products }: Props) {
  return (
    // <div>
    //   <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
    //     {products.map((product) => (
    //       <ProductCard product={product} key={product.slug} />
    //     ))}
    //   </div>
    // </div>
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
    >
      {products.map((product) => (
        <SwiperSlide>
          <ProductCard product={product} key={product.slug} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsContainer;
