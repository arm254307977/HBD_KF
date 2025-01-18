import React, { useEffect, useState } from "react";
import ButtonBackToPage1 from "./ButtonBackToPage1";
import Confetti from "react-confetti";
import Header from "./Header";
import GiftBox from "./page3/GiftBox";
import Card1 from "./page2/Card1";
import Video from "./page2/Video";
import CardEffectSwiper from "./page3/CardEffectSwiper";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Page3Props {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

function Page3({ setSelectPage }: Page3Props) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [textHeader1, setTextHeader1] = useState("");
  const [textHeader2, setTextHeader2] = useState("");
  const [textHeader3] = useState("ไว้เค้าจะพาไปเที่ยวเยอะๆเลย 🍃");
  const [textIndex, setTextIndex] = useState(0); // ตัวแปร index เดียวใช้สำหรับข้อความทั้งหมด

  const fullTextHeader1 = "รูปคู่สุดน่ารัก";
  const fullTextHeader2 = "ไว้ให้หายคิดถึง";
  const typingSpeed = 45; // ความเร็วในการพิมพ์ (ms)
  const fullText = fullTextHeader1 + fullTextHeader2; // รวมข้อความทั้งหมด

  const [dataSelectImgage, setDataSelectImgage] = useState<StaticImageData | null>(null);

  // ตั้งค่าขนาดหน้าจอ
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  // พิมพ์ข้อความทีละตัว
  useEffect(() => {
    if (textIndex < fullText.length) {
      const typingInterval = setInterval(() => {
        const nextChar = fullText[textIndex];
        if (textIndex < fullTextHeader1.length) {
          setTextHeader1((prev) => prev + nextChar);
        } else {
          setTextHeader2((prev) => prev + nextChar);
        }
        setTextIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearInterval(typingInterval); // ล้าง interval
    } else {
    }
  }, [textIndex, fullText, typingSpeed]);

  return (
    <>
      <Confetti recycle={true} opacity={0.8} numberOfPieces={20} width={dimensions.width} height={dimensions.height} />

      <Header textHeader1={textHeader1} textHeader2={textHeader2} textHeader3={textHeader3} emoji1={"🫧"} emoji2={""} />

      <CardEffectSwiper dataSelectImgage={dataSelectImgage} setDataSelectImgage={setDataSelectImgage} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="flex flex-col gap-2 my-10 items-center"
      >
        <p className="text-hot-pink">🎂 วันเกิดแมวน้อย 🐱</p>
        <Video />
      </motion.div>

      <GiftBox isBoxOpen={isBoxOpen} setIsBoxOpen={setIsBoxOpen} />

      <ButtonBackToPage1 setSelectPage={setSelectPage} setIsBoxOpen={setIsBoxOpen} />
    </>
  );
}

export default Page3;
