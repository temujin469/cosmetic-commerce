import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { Navigation, Pagination, A11y } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  images:string[]
}

function ImageSlider({images}:Props) {
  return (
    <div>
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {
              <Link href={`#`}>
                <a className="overflow-hidden">
                  <img className="w-full h-full md:h-[500px] object-cover" src={image} />
                </a>
              </Link>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
