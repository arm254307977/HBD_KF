"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ModalShowImage from "../page2/ModalShowImage";

import image100 from "../../../public/images/100.jpg";
import image101 from "../../../public/images/101.jpg";
import image102 from "../../../public/images/102.jpg";
import image103 from "../../../public/images/103.jpg";
import image104 from "../../../public/images/104.jpg";
import image105 from "../../../public/images/105.jpg";
import image106 from "../../../public/images/106.jpg";
import image107 from "../../../public/images/107.jpg";
import image108 from "../../../public/images/108.jpg";
import image109 from "../../../public/images/109.jpg";
import image110 from "../../../public/images/110.jpg";
import image111 from "../../../public/images/111.jpg";
import image112 from "../../../public/images/112.jpg";
import image113 from "../../../public/images/113.jpg";
import image114 from "../../../public/images/114.jpg";
import image115 from "../../../public/images/115.jpg";
import image116 from "../../../public/images/116.jpg";
import image117 from "../../../public/images/117.jpg";

type Props = {
  dataSelectImgage: StaticImageData | null;
  setDataSelectImgage: React.Dispatch<SetStateAction<StaticImageData | null>>;
};

export default function CardEffectSwiper({ dataSelectImgage, setDataSelectImgage }: Props) {
  const images = [
    image100,
    image101,
    image102,
    image103,
    image104,
    image105,
    image106,
    image107,
    image108,
    image109,
    image110,
    image111,
    image112,
    image113,
    image114,
    image115,
    image116,
    image117,
  ];

  return (
    <motion.section
      className={`w-full flex justify-center items-center -mt-4 px-4`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <Swiper
        loop={true}
        pagination={false}
        spaceBetween={5}
        centeredSlides={false}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full md:w-[23rem] drop-shadow-lg relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <div className="w-full h-full flex justify-center items-center cursor-pointer" onClick={() => setDataSelectImgage(image)}>
              <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" width={300} height={400} />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute top-2 -right-[70px] md:-right-[90px] swing">
          <Image src="/images/ลูกศร2.png" alt="ลูกศร" width={50} height={50} className="" />
        </div>
        <p className="-top-2 -right-[70px] md:-right-[100px] absolute text-xs text-nude font-bold drifting">จิ้มดูได้น้า</p>
      </Swiper>
      <ModalShowImage dataSelectImgage={dataSelectImgage} setDataSelectImgage={setDataSelectImgage} />
    </motion.section>
  );
}
