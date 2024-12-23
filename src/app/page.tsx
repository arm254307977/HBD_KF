"use client";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectPage, setSelectPage] = useState<number>(1);
  return (
    <div className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 min-h-screen flex flex-col items-center justify-center py-4">
      {selectPage === 1 ? <Page1 setSelectPage={setSelectPage} /> : <Page2 setSelectPage={setSelectPage} />}
    </div>
  );
}
