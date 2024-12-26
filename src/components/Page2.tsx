"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Video from "./page2/Video";
import ButtonBackToPage1 from "./ButtonBackToPage1";
import Card1 from "./page2/Card1";
import GiftBox from "./page2/GiftBox";
import Confetti from "react-confetti";

interface Page2Props {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Page2({ setSelectPage }: Page2Props) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [textHeader1, setTextHeader1] = useState("");
  const [textHeader2, setTextHeader2] = useState("");
  const [textHeader3, setTextHeader3] = useState("เค้ามีสาวมาให้เธอดู ค่อยๆดูนะ คนนี้น่ารักมากเลย");
  const [textIndex, setTextIndex] = useState(0); // ตัวแปร index เดียวใช้สำหรับข้อความทั้งหมด

  const fullTextHeader1 = "โตขึ้นอีกปีแล้ว";
  const fullTextHeader2 = "19/01";
  const typingSpeed = 100; // ความเร็วในการพิมพ์ (ms)
  const fullText = fullTextHeader1 + fullTextHeader2; // รวมข้อความทั้งหมด

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
      <Confetti run={isBoxOpen} recycle={false} opacity={0.8} numberOfPieces={500} width={dimensions.width} height={dimensions.height} />

      <Header textHeader1={textHeader1} textHeader2={textHeader2} textHeader3={textHeader3} emoji1={"⛅️"} emoji2={"🎉"} />

      <GiftBox isBoxOpen={isBoxOpen} setIsBoxOpen={setIsBoxOpen} />

      <Card1 />

      <Video />

      <ButtonBackToPage1 setSelectPage={setSelectPage} setIsBoxOpen={setIsBoxOpen} />
    </>
  );
}
