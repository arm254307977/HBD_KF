"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalShowPin from "./ModalShowPin";

type Props = {
  isBoxOpen: boolean;
  setIsBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function GiftBox({ isBoxOpen, setIsBoxOpen }: Props) {
  return (
    <motion.section
      className={`w-full flex flex-col justify-center items-center mt-2`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <p className="text-hot-pink">กล่องลับสุดยอดดด .</p>
      <div className="-mt-9 relative">
        <div className="absolute top-[15px] right-[24px] driftingYoRu">
          <Image src="/images/หนูในถุงเท้า.png" alt="หนูในถุงเท้า" width={60} height={60} className="drop-shadow-md" />
        </div>
        <div className={`flex justify-center items-center cursor-pointer gift-box2`} onClick={() => setIsBoxOpen(true)}>
          <Image src="/images/gift2.png" alt="Gift" width={250} height={250} className="drop-shadow-md" />
        </div>
        <div className="absolute bottom-12 left-[20px] swing">
          <Image src="/images/ลูกศร.png" alt="ลูกศร" width={50} height={50} className="" />
        </div>
        <p className="bottom-[32px] left-[-50px] absolute text-xs text-nude font-bold drifting">มาถามเค้าเดี๋ยวใบ้รหัสให้</p>
      </div>

      <ModalShowPin isBoxOpen={isBoxOpen} setIsBoxOpen={setIsBoxOpen} />
    </motion.section>
  );
}

export default GiftBox;
