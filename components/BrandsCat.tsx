import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper";

import { brands} from "../utils/data";
import Link from "next/link";

function BrandsCat() {
  return (
    <div className="px-5 pb-5 sm:pb-10 pt-0 bg-white">
      <h1 className="md:text-2xl text-xl font-medium text-gray-800 py-5">Брэндүүд</h1>
      <Swiper
        modules={[A11y]}
        breakpoints={{
          270: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          300: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            // width:640,
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            // width: 768,
            slidesPerView: 4,
            spaceBetween: 5,
          },
          900: {
            // width: 900,
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1070: {
            // width: 1070,
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.slug}>
            {
              <Link href={`/brand/${brand.slug}`}>
                <a className="flex items-center flex-col">
                  <img
                    className="w-[6rem] h-[6rem] md:w-40 md:h-40 rounded-full border object-cover hover:shadow-xl"
                    src={brand.image}
                    alt={brand.name}
                  />
                  <p className="font-medium text-gray-700 md:text-xl">{brand.name}</p>
                </a>
              </Link>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandsCat;
