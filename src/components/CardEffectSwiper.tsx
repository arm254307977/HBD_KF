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

import image1 from "../../public/images/1.jpg";
import image2 from "../../public/images/2.jpg";
import image3 from "../../public/images/3.jpg";
import image4 from "../../public/images/4.jpg";
import image5 from "../../public/images/5.jpg";
import image6 from "../../public/images/6.jpg";
import image7 from "../../public/images/7.jpg";
import image8 from "../../public/images/8.jpg";
import image9 from "../../public/images/9.jpg";
import image10 from "../../public/images/10.jpg";
import image11 from "../../public/images/11.jpg";
import image12 from "../../public/images/12.jpg";
import image13 from "../../public/images/13.jpg";
import image14 from "../../public/images/14.jpg";
import image15 from "../../public/images/15.jpg";
import image16 from "../../public/images/16.jpg";
import image17 from "../../public/images/17.jpg";
import image18 from "../../public/images/18.jpg";
import image19 from "../../public/images/19.jpg";
import image20 from "../../public/images/20.jpg";
import image21 from "../../public/images/21.jpg";
import image22 from "../../public/images/22.jpg";
import image23 from "../../public/images/23.jpg";

export default function CardEffectSwiper({ setDataSelectImgage }: Props) {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
  ];

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
        <Image src="/images/ลูกศร2.png" alt="เป็ด" width={50} height={50} className="" />
      </div>
      <p className="-top-2 -right-[70px] md:-right-[100px] absolute text-xs text-nude font-bold drifting">จิ้มดูได้น้า</p>
    </Swiper>
  );
}
