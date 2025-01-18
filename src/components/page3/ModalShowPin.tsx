import React, { SetStateAction, useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, InputOtp } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {
  isBoxOpen: boolean;
  setIsBoxOpen: React.Dispatch<SetStateAction<boolean>>;
};

type FormData = {
  otp: string;
};

const ModalShowPin = ({ isBoxOpen, setIsBoxOpen }: Props) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      otp: "",
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShowVideo, setIsShowVideo] = useState<boolean>(false);
  const [errorMessageInput, setErrorMessageInput] = useState<string>(""); // เก็บข้อความเตือน
  const [otp, setOtp] = useState<string>(""); // เก็บค่า OTP ที่พิมพ์
  const [isOtpValid, setIsOtpValid] = useState<boolean | null>(null); // ตรวจสอบ OTP

  useEffect(() => {
    if (isBoxOpen) {
      onOpen();
    }
  }, [isBoxOpen]);

  const handleModalClose = () => {
    setIsBoxOpen(false);
    onClose();

    setIsShowVideo(false);
    setErrorMessageInput("");
    setOtp("");
    setIsOtpValid(null);
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);

    if (!value) {
      setErrorMessageInput("ใส่รหัสค้าบบ");
      setIsOtpValid(null);
      return;
    }

    if (value.length < 4) {
      setErrorMessageInput("ให้ครบ 4 ตัวหนา");
      setIsOtpValid(null);
      return;
    }

    // กรณีที่กรอกครบ 4 ตัว
    if (value.length === 4) {
      if (value === "2224") {
        setErrorMessageInput("");
        setIsOtpValid(true);
        setIsShowVideo(true);
      } else {
        setErrorMessageInput("รหัสไม่ถูกแงะ มาถามเค้าจิ!");
        setIsOtpValid(false);
      }
    }
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
      <ModalContent className="bg-cream/90">
        {(onClose) => (
          <>
            <ModalHeader className="">
              <div className="absolute -top-[40px] -left-[20px] crown">
                <Image src="/images/ไม้เท้า.png" alt="ไม้เท้า" width={70} height={70} className="" />
              </div>
            </ModalHeader>
            <ModalBody>
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  overshootClamping: false,
                }}
                className="w-full h-full flex flex-col justify-center items-center"
              >
                {isShowVideo ? (
                  <video poster="/images/กระต่ายHBD.jpeg" controls className="rounded-xl drop-shadow-lg">
                    <source src="/images/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <form className="lex flex-col justify-center items-center">
                    <Controller
                      control={control}
                      name="otp"
                      render={({ field }) => (
                        <div className="flex flex-col items-center">
                          <InputOtp
                            {...field}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              field.onChange(e);
                              handleOtpChange(e.target.value);
                            }}
                            value={otp}
                            errorMessage={errors.otp && errors.otp.message}
                            isInvalid={!!errors.otp || isOtpValid === false}
                            size="lg"
                            variant="underlined"
                            length={4}
                          />
                          {errorMessageInput && <span className="text-nude font-bold mt-2 text-xs">{errorMessageInput}</span>}
                        </div>
                      )}
                      rules={{
                        required: "ใส่รหัสได้เลยจ้า",
                        minLength: {
                          value: 4,
                          message: "ใส่ให้ครบเส้",
                        },
                      }}
                    />
                    {/* <Button className="max-w-fit mt-4 bg-nude text-cream" type="submit" variant="flat" size="sm">
                    ยืนยัน
                  </Button> */}
                  </form>
                )}
              </motion.div>
            </ModalBody>
            <ModalFooter>
              <div className="driftingYoRu absolute left-0 bottom-0">
                <Image src="/images/โยรุHBD4.png" alt="โยรุHBD" width={70} height={70} className="" />
              </div>
              <Button
                className="text-cream bg-hot-pink"
                variant="solid"
                onPress={() => {
                  onClose();
                  setIsBoxOpen(false);
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

export default ModalShowPin;
