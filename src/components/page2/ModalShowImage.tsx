import React, { SetStateAction, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

type Props = {
  isDataSelectImgage: StaticImageData | null;
  setDataSelectImgage: React.Dispatch<SetStateAction<StaticImageData | null>>;
};

const ModalShowImage = ({ isDataSelectImgage, setDataSelectImgage }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("isDataSelectImgage : ", isDataSelectImgage);

    if (isDataSelectImgage) {
      onOpen();
    }
  }, [isDataSelectImgage]);

  const handleModalClose = () => {
    setDataSelectImgage(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleModalClose();
        }
      }}
      scrollBehavior={"inside"}
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
