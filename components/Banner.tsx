import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { banners } from "../utils/data";

function Banner() {
  return (
    <div className="bg-white">
      <Swiper
        slidesPerView={1}
      >
          {banners.map((banner,index) => (
            <SwiperSlide key={index}>
              {
                <Link href={`#`}>
                <a className="object-cover overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={banner.image}
                  />
                </a>
                </Link>
              }
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Banner;
