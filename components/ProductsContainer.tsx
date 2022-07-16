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
      slidesPerView={2}
      breakpoints={{
        270: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        350: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          // width:640,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          // width: 768,
          slidesPerView: 4,
          spaceBetween: 20,
        },
        900: {
          // width: 900,
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1070: {
          // width: 1070,
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide>
          <div className="pb-8">
            <ProductCard product={product} key={product.slug} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsContainer;
