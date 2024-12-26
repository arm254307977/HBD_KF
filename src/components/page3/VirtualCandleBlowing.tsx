"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";

export default function VirtualCandleBlowing() {
  const [isBlown, setIsBlown] = useState(false); // สถานะของเทียน (เป่าดับแล้วหรือยัง)
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBlow = () => {
    setIsBlown(true); // เปลี่ยนสถานะเป็นดับ
    setShowConfetti(true); // แสดง Confetti
    setTimeout(() => setShowConfetti(false), 3000); // ซ่อน Confetti หลัง 3 วินาที
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      {/* Confetti Effect */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* เค้กวันเกิด */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center"
      >
        <Image
          src="/images/cake.png" // ใส่ภาพเค้กของคุณ
          alt="Birthday Cake"
          width={300}
          height={300}
          className="mb-4"
        />

        {/* เทียน */}
        {!isBlown ? (
          <motion.div
            className="w-4 h-16 bg-yellow-400 rounded-full relative flex flex-col items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleBlow} // เป่าดับเมื่อคลิก
          >
            {/* เปลวไฟ */}
            <motion.div
              className="w-4 h-4 bg-yellow-200 rounded-full absolute top-0"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.div>
        ) : (
          <p className="text-center text-lg font-bold text-gray-600 mt-4">🎉 เทียนดับแล้ว! สุขสันต์วันเกิด! 🎉</p>
        )}
      </motion.div>
    </div>
  );
}
