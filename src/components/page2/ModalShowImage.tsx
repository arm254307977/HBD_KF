import React, { SetStateAction, useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import Image from "next/image";

type Props = {
  isDataSelectImgage: any;
  setDataSelectImgage: React.Dispatch<SetStateAction<any>>;
};

const ModalShowImage = ({ isDataSelectImgage, setDataSelectImgage }: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState<ModalProps["scrollBehavior"]>("inside");

  useEffect(() => {
    console.log("isDataSelectImgage : ", isDataSelectImgage);

    if (isDataSelectImgage) {
      onOpen();
    }
  }, [isDataSelectImgage]);

  const handleModalClose = () => {
    setDataSelectImgage(null); // ล่างค่าที่นี่เมื่อ modal ถูกปิด
    onClose(); // ปิด modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleModalClose();
        }
      }}
      scrollBehavior={scrollBehavior}
      //   onOpenChange={onOpenChange}
      placement="center"
      size="lg"
      backdrop="blur"
      className="m-4"
      classNames={{
        body: "py-6",
        backdrop: "bg-hot-pink/20",
        base: "",
        header: "",
        footer: "",
        closeButton: "",
      }}
    >
      <ModalContent className="bg-cream/70">
        {(onClose) => (
          <>
            <ModalHeader className="">
              <div className="absolute -top-[72px] -left-[20px] crown">
                <Image src="/images/มงกุฏ.png" alt="มงกุฏ" width={70} height={70} className="" />
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  src={isDataSelectImgage || "/images/dinoNotFound.jpeg"}
                  alt={`image preview`}
                  className="w-full h-full object-cover rounded-md drop-shadow-lg border border-nude/50"
                  width={300}
                  height={400}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="driftingYoRu absolute left-0 bottom-0">
                <Image src="/images/โยรุHBD3.png" alt="โยรุHBD" width={70} height={70} className="" />
              </div>
              <Button
                className="bg-hot-pink text-cream"
                variant="solid"
                onPress={() => {
                  onClose();
                }}
              >
                ปิด
              </Button>
              {/* <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalShowImage;
