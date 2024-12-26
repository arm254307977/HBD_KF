"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import ButtonsSurprise from "./page1/ButtonsSurprise";
import FooterPage1 from "./page1/FooterPage1";
import MusicPlayer from "./MusicPlayer";
import Confetti from "react-confetti";

interface Page1Props {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Page1({ setSelectPage }: Page1Props) {
  const [isConfetti, setIsConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [textHeader1, setTextHeader1] = useState("");
  const [textHeader2, setTextHeader2] = useState("");
  const [textIndex, setTextIndex] = useState(0); // ตัวแปร index เดียวใช้สำหรับข้อความทั้งหมด

  const fullTextHeader1 = "สุขสันต์วันเกิด";
  const fullTextHeader2 = "กองฟาง";
  const fullText = fullTextHeader1 + fullTextHeader2; // รวมข้อความทั้งหมด
  const typingSpeed = 100; // ความเร็วในการพิมพ์ (ms)

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
      setIsConfetti(false); // หยุด Confetti เมื่อพิมพ์ข้อความเสร็จ
    }
  }, [textIndex, fullText, typingSpeed]);

  return (
    <>
      <Confetti recycle={isConfetti && true} opacity={0.8} numberOfPieces={150} width={dimensions.width} height={dimensions.height} />

      <Header
        textHeader1={textHeader1}
        textHeader2={textHeader2}
        textHeader3={"ขอให้เธอมีความสุขมาก ทั้งในวันนี้และตลอดไป..."}
        emoji1={"🎊"}
        emoji2={"✨"}
      />

      <ButtonsSurprise setSelectPage={setSelectPage} />

      <MusicPlayer />

      <FooterPage1 />
    </>
  );
}
