import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import laravel from "./assets/laravel.png";
import programming from "./assets/programming.png";
import design from "./assets/design.png";
import tally from "./assets/tally.jpg";

const slides = [
  { image: laravel, alt: "Laravel" },
  { image: programming, alt: "Programming" },
  { image: design, alt: "Web Design" },
  { image: tally, alt: "Tally" },
  // Add more slides here as needed
];

const ImageSlider = () => {
  return (
    <div className="rect-slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rect-slider-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="rect-slider-slide">
              <img src={slide.image} alt={slide.alt} className="rect-slider-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
