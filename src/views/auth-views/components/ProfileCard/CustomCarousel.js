import React from "react";
import { useRef } from "react";
import { Carousel } from "antd";

const CustomCarousel = ({ settings , urls }) => {
  const ref = useRef();

  return (
    <>
      <Carousel {...settings} className="carousel_card">
        {[...Array(3)].map((_, index) => (
          <div className="profile_pic" key={index}>
            <img
              src={urls}
              alt="profile"
              className="img-fluid w-100"
              ref={ref}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CustomCarousel;
