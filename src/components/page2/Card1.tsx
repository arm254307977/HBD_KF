"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Card1() {
  return (
    <motion.div
      className="bg-cream border border-nude/30 rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 relative my-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="absolute -top-3 left-3 rotate-45 text-2xl">📎</div>
      <div className={`absolute -bottom-[70px] -right-16 bounceBT1`}>
        <Image src="/images/gift1.png" alt="Gift" width={200} height={200} className="rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold text-center text-nude mb-4">ถึง แฟนของเค้า</h2>
      <p className="text-hot-pink/90 text-center leading-relaxed break-words">
        เค้าหวังว่าวันนี้จะเป็นวันที่พิเศษที่สุดสำหรับเธอ ทุกยิ้มของเธอทำให้โลกของเค้าสดใส เธอคือความสุข ความฝัน และทุกสิ่งที่เค้ารอคอย
        เค้าอยากขอบคุณสำหรับความรัก ความเข้าใจ และกำลังใจที่เธอมอบให้เสมอมา ขอให้เธอมีความสุขมากๆ เหมือนที่เธอทำให้เค้ามีความสุขในทุกวัน
        ในวันที่เหนื่อยหรือท้อ เค้าจะอยู่เคียงข้างเสมอ เธอคือคนที่สำคัญที่สุด และเค้าสัญญาจะดูแลเธอให้ดีที่สุด เค้าภูมิใจในตัวเธอทุกเรื่อง
        และอยากให้เธอมั่นใจว่าเธอสำคัญแค่ไหน ขอให้ทุกวันของเธอเต็มไปด้วยความสุข ความสำเร็จ และรอยยิ้ม รักเธอมากที่สุดนะ ❤️
      </p>
    </motion.div>
  );
}

export default Card1;
