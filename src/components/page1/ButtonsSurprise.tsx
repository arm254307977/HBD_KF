"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = { setSelectPage: Dispatch<SetStateAction<number>> };

function ButtonsSurprise({ setSelectPage }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
      className="flex flex-wrap justify-center space-x-4 relative"
    >
      <div className="absolute top-6 left-0 swing">
        <Image src="/images/ลูกศร3.png" alt="ลูกศร" width={20} height={20} className="rotate-45" />
      </div>
      <p className="top-4 -left-[50px] absolute text-[10px] text-nude driftingYoRu">กดได้น้า</p>
      <motion.button
        className="bg-nude/70 text-cream py-2 px-4 rounded-full shadow-md hover:bg-nude bounceBT1"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        onClick={() => setSelectPage(2)}
      >
        ❤️
      </motion.button>
      <motion.button
        className="bg-seafoam-green text-nude py-2 px-4 rounded-full shadow-md hover:bg-hot-pink/50 bounceBT2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        onClick={() => setSelectPage(3)}
      >
        🎁
      </motion.button>
      <div className="absolute -top-2 -right-7 swing">
        <Image src="/images/ลูกศร4.png" alt="ลูกศร" width={30} height={30} className="rotate-12" />
      </div>
      <p className="-top-5 -right-[50px] absolute text-[10px] text-nude driftingYoRu">กดนี่ด้วย</p>
    </motion.div>
  );
}

export default ButtonsSurprise;
