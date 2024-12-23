"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardEffectSwiper from "./CardEffectSwiper";

interface Page2Props {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Page2({ setSelectPage }: Page2Props) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const [textHeaderPage2, setTextHeaderPage2] = useState("");
  const fullTextHeaderPage2 = "  Our Moments Together";
  const typingSpeed = 100; // ความเร็วในการพิมพ์ (ms)

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index + 1 < fullTextHeaderPage2.length) {
        setTextHeaderPage2((prev) => prev + fullTextHeaderPage2[index]); // เพิ่มตัวอักษรทีละตัว

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
      <motion.header
        className="text-center mt-10 mb-6 flex flex-col gap-2 md:gap-6 lg:gap-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-relaxed">💖 {textHeaderPage2} 💖</h1>
        <p className="text-lg md:text-2xl text-white mt-2">These are the moments that make me love you even more.</p>
      </motion.header>

      {/* Gift Box Section */}
      <motion.section
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {!isBoxOpen ? (
          <motion.div
            className="w-[200px] h-[200px] bg-pink-500 rounded-lg flex justify-center items-center cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsBoxOpen(true)} // เปิดกล่องเมื่อคลิก
          >
            <p className="text-white text-xl font-bold">🎁 Click to Open 🎁</p>
          </motion.div>
        ) : (
          <motion.div
            className="w-full flex flex-col items-center gap-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gallery Section */}
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <CardEffectSwiper />
            </motion.section>

            {/* Video Section */}
            <motion.section
              className="w-full flex flex-col items-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <video controls className="w-[50%] h-[50%] rounded-xl">
                <source src="/images/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-white text-lg mt-6 text-center">"I love you more than words can say, and these moments show why. 💖"</p>
            </motion.section>
          </motion.div>
        )}
      </motion.section>

      {/* Back to Page 1 Button */}
      <motion.button
        className="mt-8 bg-pink-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-pink-600"
        whileHover={{ scale: 1.1 }}
        onClick={() => (window.location.href = "/")}
      >
        Back to Page 1
      </motion.button>
    </>
  );
}
