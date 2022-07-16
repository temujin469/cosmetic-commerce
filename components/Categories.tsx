import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper";

import { categories } from "../utils/data";
import Link from "next/link";

function Categories() {
  return (
    <div className="px-5 pb-2 sm:pb-10 pt-0 bg-white">
      <h1 className="md:text-2xl text-xl font-medium text-gray-800 py-5">Ангилалууд</h1>
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
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            {
              <Link href={`#`}>
                <a className="flex items-center flex-col">
                  <img
                    className="w-[6rem] h-[6rem] md:w-40 md:h-40 rounded-full object-cover"
                    src={cat.image}
                    alt={cat.name}
                  />
                  <p className="font-medium text-gray-700 md:text-xl">{cat.name}</p>
                </a>
              </Link>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
