import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { categories } from "../utils/data";
import Link from "next/link";

function Categories() {
  return (
    <div className="p-5 pt-0 bg-white">
      <h1 className="text-xl text-gray-800 py-5">Ангилалууд</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
      >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              {
                <Link href={`#`}>
                <a className="flex items-center flex-col">
                  <img
                    className="w-[6rem] h-[6rem] lg:w-36 lg:h-36 rounded-full object-cover"
                    src={cat.image}
                    alt={cat.name}
                  />
                  <p>{cat.name}</p>
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
