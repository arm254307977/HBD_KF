"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardEffectSwiper from "./CardEffectSwiper";

interface Page2Props {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Page2({ setSelectPage }: Page2Props) {
  const [textHeaderPage2, setTextHeaderPage2] = useState("");
  const fullTextHeaderPage2 = "Our Moments Together";
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

      {/* Gallery Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        {/* <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image src="/images/photo1.jpg" alt="Moment 1" width={300} height={300} className="object-cover" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image src="/images/photo2.jpg" alt="Moment 2" width={300} height={300} className="object-cover" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image src="/images/photo3.jpg" alt="Moment 3" width={300} height={300} className="object-cover" />
        </div> */}

        <CardEffectSwiper />
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="w-full px-4 py-6 flex flex-col items-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <video controls className="w-full max-w-2xl rounded-lg shadow-lg">
          <source src="/videos/love_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-white text-lg mt-4 text-center">"I love you more than words can say, and these moments show why. 💖"</p>
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
