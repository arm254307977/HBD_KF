"use client";
import { Button } from "@nextui-org/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { motion } from "framer-motion";

type Props = {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
  setIsBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ButtonBackToPage1 = ({ setSelectPage, setIsBoxOpen }: Props) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
      <Button
        isIconOnly
        radius="full"
        size="lg"
        variant="shadow"
        className="bg-nude/80 text-cream"
        onPress={() => {
          setSelectPage(1);
          setIsBoxOpen(false);
        }}
      >
        <RiArrowGoBackFill />
      </Button>
    </motion.div>
  );
};

export default ButtonBackToPage1;
