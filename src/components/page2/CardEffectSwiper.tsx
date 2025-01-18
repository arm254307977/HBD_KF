"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { SetStateAction } from "react";

type Props = {
  setDataSelectImgage: React.Dispatch<SetStateAction<StaticImageData | null>>;
};

export default function CardEffectSwiper({ setDataSelectImgage }: Props) {
  const images = [];
  for (let i = 1; i <= 32; i++) {
    images.push(require(`../../../public/images/${i}.jpg`));
  }

  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[12rem] h-[17rem] md:w-[23rem] md:h-[35rem] drop-shadow-lg relative"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="rounded-xl">
          <div className="w-full h-full flex justify-center items-center cursor-pointer" onClick={() => setDataSelectImgage(image)}>
            <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" width={300} height={400} />
          </div>
        </SwiperSlide>
      ))}

      <div className="absolute top-2 -right-[70px] md:-right-[90px] swing">
        <Image src="/images/ลูกศร2.png" alt="ลูกศร" width={50} height={50} className="" />
      </div>
      <p className="-top-2 -right-[70px] md:-right-[100px] absolute text-xs text-nude font-bold drifting">จิ้มดูได้น้า</p>
    </Swiper>
  );
}
