"use client";
import { motion } from "framer-motion";

type Props = {
  textHeader1: string;
  textHeader2: string;
  textHeader3: string;
  emoji1: string;
  emoji2: string;
};

function HeaderPage1({ textHeader1, textHeader2, textHeader3, emoji1, emoji2 }: Props) {
  return (
    <header className="text-center mb-6 flex flex-col gap-2 md:gap-6 lg:gap-8">
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg leading-relaxed break-words flex flex-col justify-center items-center md:flex-row md:gap-4 md:pt-6">
        <div className="text-nude">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="swing absolute w-9 right-5 -top-4 md:-right-10 md:-top-1  lg:-right-10 lg:-top-1 drop-shadow-md"
          >
            {emoji1}
          </motion.div>
          {textHeader1}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="drifting absolute w-10 left-10 bottom-0 md:-left-[59px] md:-top-1  lg:-left-14 lg:-top-1 drop-shadow-md"
          >
            {emoji2}
          </motion.div>
        </div>
        <p className="text-hot-pink">{textHeader2}</p>
      </h1>
      <motion.p
        className="text-lg md:text-2xl text-hot-pink/90 mt-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {textHeader3}
      </motion.p>
    </header>
  );
}

export default HeaderPage1;
