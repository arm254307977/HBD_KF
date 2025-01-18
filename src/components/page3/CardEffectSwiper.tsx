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

type Props = {
  dataSelectImgage: StaticImageData | null;
  setDataSelectImgage: React.Dispatch<SetStateAction<StaticImageData | null>>;
};

export default function CardEffectSwiper({ dataSelectImgage, setDataSelectImgage }: Props) {
  const [images, setImages] = useState<StaticImageData[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages: StaticImageData[] = [];
      for (let i = 100; i <= 117; i++) {
        const image = await import(`../../../public/images/${i}.jpg`);
        importedImages.push(image.default);
      }
      setImages(importedImages);
    };

    loadImages();
  }, []);

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
