import React from "react";
import { urlFor } from "../utils/imageOptimize";
import { Carousel } from "antd";

type Props = {
  images: {}[];
};

function ProductImageSlider({ images }: Props) {
  return (
    <Carousel>
      {images.map((image, i) => (
        <img
          className="object-fill"
          key={i}
          src={urlFor(image).width(500).height(500).url()}
        />
      ))}
    </Carousel>
  );
}

export default ProductImageSlider;
