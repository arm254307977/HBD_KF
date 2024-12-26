"use client";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import { useState } from "react";

export default function Home() {
  const [selectPage, setSelectPage] = useState<number>(1);

  return (
    <div className="bg-hot-pink/10 min-h-screen flex flex-col items-center justify-center py-4 overflow-x-hidden">
      {selectPage === 1 ? (
        <Page1 setSelectPage={setSelectPage} />
      ) : selectPage === 2 ? (
        <Page2 setSelectPage={setSelectPage} />
      ) : selectPage === 3 ? (
        <Page3 />
      ) : null}
    </div>
  );
}
