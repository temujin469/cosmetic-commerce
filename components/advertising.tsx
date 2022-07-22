import React from "react";
import { Carousel } from "antd";
import { Advertising } from "../typings";
import { urlFor } from "../utils/imageOptimize";

type Props ={
  advertisingData:Advertising[]
}


function Banner({advertisingData}:Props) {
  return (
    <div className="md:p-5 lg:p-8">
      <Carousel autoplay>
        {advertisingData.map((data) => (
          <a className="overflow-hidden " key={data._id}>
            <img
              className="w-full h-full md:h-[500px] object-cover"
              src={urlFor(data.image).url()}
            />
          </a>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
