import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { banners } from "../utils/data";
import { Navigation, Pagination, A11y } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Banner() {
  return (
    <div className="bg-white">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            // width: 1070,
            slidesPerView: 2,
          },
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            {
              <Link href={`#`}>
                <a className="overflow-hidden">
                  <img className="w-full h-full md:h-[500px] object-cover" src={banner.image} />
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
