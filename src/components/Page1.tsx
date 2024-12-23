"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Page1Props {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Page1({ setSelectPage }: Page1Props) {
  const [textHeaderPage1, setTextHeaderPage1] = useState("");
  const fullTextHeaderPage1 = "Happy Birthday Kongfang! 🎂";
  const typingSpeed = 100; // ความเร็วในการพิมพ์ (ms)

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index + 1 < fullTextHeaderPage1.length) {
        setTextHeaderPage1((prev) => prev + fullTextHeaderPage1[index]); // เพิ่มตัวอักษรทีละตัว

        index++;
      } else {
        clearInterval(typingInterval); // หยุดเมื่อครบข้อความ
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // ล้าง Interval เมื่อคอมโพเนนต์ถูกลบ
  }, []);

  return (
    <>
      {/* Header */}
      <header className="text-center mb-6 flex flex-col gap-2 md:gap-6 lg:gap-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🎉 {textHeaderPage1}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-white mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Wishing you the happiest day filled with love and joy!
        </motion.p>
      </header>

      {/* Birthday Card */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">To My Beloved 💖</h2>
        <p className="text-gray-700 text-center">I hope this day brings you as much happiness as you bring to my life. You are my everything!</p>
      </motion.div>
      {/* Buttons */}
      <div className="mt-6 flex flex-wrap justify-center space-x-4">
        <motion.button
          className="bg-pink-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-pink-600"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          onClick={() => setSelectPage(2)}
        >
          Love You ❤️
        </motion.button>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
          onClick={() => setSelectPage(3)}
        >
          Surprise 🎁
        </motion.button>
      </div>
      {/* Footer */}
      <motion.footer
        className="text-white mt-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Made with 💖 for you
      </motion.footer>
    </>
  );
}
