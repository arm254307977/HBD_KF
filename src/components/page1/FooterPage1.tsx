"use client";
import { motion } from "framer-motion";

function FooterPage1() {
  return (
    <motion.footer
      className="text-nude mt-8 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 3.5 }}
    >
      ตั้งใจทำด้วย 💖 ให้กองฟางคับ
    </motion.footer>
  );
}

export default FooterPage1;
