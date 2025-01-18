import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { PiPauseDuotone, PiPlayDuotone } from "react-icons/pi";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import imageCD from "../../public/images/cd.png";
import Image from "next/image";

const musicFiles = [
  "/audio/คลั่งรัก.mp3",
  "/audio/คุณแฟน.mp3",
  "/audio/โชคดีที่มีเธอ.mp3",
  "/audio/ตกหลุมรักซ้ำๆ.mp3",
  "/audio/ตั้งใจรัก.mp3",
  "/audio/ปีนี้พิเศษ (เพราะมีคนนี้).mp3",
  "/audio/รอยยิ้มของทุกวัน.mp3",
  "/audio/รักแกเท่าท้องฟ้า.mp3",
  "/audio/รักนานๆ.mp3",
  "/audio/วิวโปรดของฉันคือเธอ.mp3",
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const duration = useMemo(() => {
    return audioRef.current?.duration || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef?.current?.duration]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [audioRef]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleNextSong = async () => {
    const nextIndex = (currentSongIndex + 1) % musicFiles.length;
    setCurrentSongIndex(nextIndex);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + musicFiles.length) % musicFiles.length;
    setCurrentSongIndex(prevIndex);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const getSongTitle = (path: string) => {
    return path.split("/").pop()?.replace(".mp3", "") || "Unknown Song";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="music-player bg-hot-pink/20 relative p-6 rounded-xl shadow-lg flex flex-col items-center mb-10 w-full max-w-xs"
    >
      <div className=" absolute -top-2 left-1 rotate-45 text-2xl">📎</div>
      <div className=" absolute right-2 top-2 text-xs text-nude">
        {currentSongIndex + 1}/{musicFiles.length}
      </div>
      {/* รูปภาพเพลง */}
      <div className="w-48 h-48 rounded-lg mb-4 flex items-center justify-center opacity-90">
        <Image src={imageCD} alt={`CD`} className={`w-full h-full object-cover rounded-full ${isPlaying && "spinCD"}`} width={300} height={400} />
      </div>

      {/* ชื่อเพลง */}
      <h3 className="text-lg font-bold text-nude drop-shadow-md">{getSongTitle(musicFiles[currentSongIndex])}</h3>
      <p className="text-xs text-nude/70">ฟังให้ครบทุกเพลงนะค้าบ</p>

      {/* Progress bar */}
      <div className="w-full mt-4 flex flex-col items-center">
        <input
          type="range"
          className="w-full appearance-none bg-cream h-2 rounded-full accent-nude"
          min={0}
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={handleProgressChange}
        />

        <div className="flex justify-between w-full text-xs mt-2 text-nude">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* ปุ่มควบคุม */}
      <div className="flex items-center gap-4 mt-4">
        <button className="bg-nude text-cream px-4 py-2 rounded-full shadow-md hover:bg-nude/90" onClick={handlePreviousSong}>
          <MdOutlineSkipPrevious />
        </button>
        <button className="bg-nude text-cream px-4 py-2 rounded-full shadow-md hover:bg-nude/90" onClick={togglePlayPause}>
          {isPlaying ? <PiPauseDuotone /> : <PiPlayDuotone />}
        </button>
        <button className="bg-nude text-cream px-4 py-2 rounded-full shadow-md hover:bg-nude/90" onClick={handleNextSong}>
          <MdOutlineSkipNext />
        </button>
      </div>

      {/* เครื่องเล่นเพลง (ซ่อน) */}
      <audio ref={audioRef} src={musicFiles[currentSongIndex]} onEnded={handleNextSong} />
    </motion.div>
  );
}
