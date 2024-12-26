"use client";
import { Button } from "@nextui-org/react";
import { RiArrowGoBackFill } from "react-icons/ri";

type Props = {
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
  setIsBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ButtonBackToPage1 = ({ setSelectPage, setIsBoxOpen }: Props) => {
  return (
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
  );
};

export default ButtonBackToPage1;
