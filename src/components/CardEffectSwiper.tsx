"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function CardEffectSwiper() {
  return (
    <Swiper effect="cards" grabCursor={true} modules={[EffectCards]} className="w-[10rem] h-[15rem] md:w-[23rem] md:h-[35rem]">
      <SwiperSlide>
        <div className="bg-gradient-to-br from-white to-gray-200 w-full h-full flex justify-center items-center text-gray-800 text-xl md:text-3xl font-semibold rounded-lg shadow-lg border border-gray-300">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gradient-to-br from-white to-blue-100 w-full h-full flex justify-center items-center text-blue-800 text-xl md:text-3xl font-semibold rounded-lg shadow-lg border border-blue-300">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gradient-to-br from-white to-green-100 w-full h-full flex justify-center items-center text-green-800 text-xl md:text-3xl font-semibold rounded-lg shadow-lg border border-green-300">
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gradient-to-br from-white to-orange-100 w-full h-full flex justify-center items-center text-orange-800 text-xl md:text-3xl font-semibold rounded-lg shadow-lg border border-orange-300">
          Slide 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
