"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {};

function Video({}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  return (
    <motion.section
      className="w-full relative flex flex-col items-center border-4 border-hot-pink/40 max-w-xs py-4 rounded-xl my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 2.5 }}
    >
      <div className="absolute -top-7 -left-[85px] text-4xl drifting">
        <Image src="/images/หมีถือลูกโป่ง.png" alt="หมีถือลูกโป่ง" width={250} height={250} className="-rotate-12" />
      </div>
      <div className=" absolute -top-4 -right-3 text-4xl swing">💫</div>
      <video ref={videoRef} onEnded={handleVideoEnded} poster="/images/โยรุHBD.jpeg" controls className="w-[50%] h-[50%] rounded-xl drop-shadow-lg">
        <source src="/images/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute -bottom-9 -right-[47px] text-4xl driftingYoRu">
        <Image src="/images/เป็ด.png" alt="เป็ด" width={150} height={150} className="" />
      </div>
    </motion.section>
  );
}

export default Video;
