"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = { setSelectPage: Dispatch<SetStateAction<number>> };

function ButtonsSurprise({ setSelectPage }: Props) {
  return (
    <div className="mb-6 flex flex-wrap justify-center space-x-4">
      <motion.button
        className="bg-nude/70 text-cream py-2 px-4 rounded-full shadow-md hover:bg-nude bounceBT1"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 3 }}
        onClick={() => setSelectPage(2)}
      >
        ❤️
      </motion.button>
      <motion.button
        className="bg-seafoam-green text-nude py-2 px-4 rounded-full shadow-md hover:bg-hot-pink/50 bounceBT2"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 3 }}
        onClick={() => setSelectPage(3)}
      >
        🎁
      </motion.button>
    </div>
  );
}

export default ButtonsSurprise;
