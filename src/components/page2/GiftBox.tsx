"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CardEffectSwiper from "../CardEffectSwiper";
import ModalShowImage from "./ModalShowImage";
import { useState } from "react";

type Props = {
  isBoxOpen: boolean;
  setIsBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function GiftBox({ isBoxOpen, setIsBoxOpen }: Props) {
  const [isDataSelectImgage, setDataSelectImgage] = useState();
  return (
    <motion.section
      className={`w-full flex justify-center items-center ${!isBoxOpen ? "my-[-4rem]" : "my-4"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      {!isBoxOpen ? (
        <div className=" relative">
          <div className={`flex justify-center items-center cursor-pointer gift-box`} onClick={() => setIsBoxOpen(true)}>
            <Image src="/images/gift.png" alt="Gift" width={350} height={350} className="rounded-lg" />
          </div>
          <div className="absolute bottom-36 left-[60px] swing">
            <Image src="/images/ลูกศร.png" alt="เป็ด" width={50} height={50} className="" />
          </div>
          <p className="bottom-[125px] left-[40px] absolute text-xs text-nude font-bold drifting">เปิดจิๆ</p>
        </div>
      ) : (
        <motion.div
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CardEffectSwiper setDataSelectImgage={setDataSelectImgage} />
        </motion.div>
      )}
      <ModalShowImage isDataSelectImgage={isDataSelectImgage} setDataSelectImgage={setDataSelectImgage} />
    </motion.section>
  );
}

export default GiftBox;
