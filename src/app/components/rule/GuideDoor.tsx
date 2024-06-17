"use client";
import { MONTIHALL_RULL } from "@/app/constants/rule";
import { Button } from "@nextui-org/button";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

const GuideDoor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div
        className="flex relative w-48 h-72 bg-[#fffcf0] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl"
        onClick={onOpen}
      >
        <div className="w-6 h-6 rounded-full flex items-center justify-center absolute top-[130px] right-4 bg-black">
          <div className="w-2 h-2 rounded-full  bg-white"></div>
        </div>
        <div className="text-3xl font-semibold text-black">{"규칙"}</div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="3xl"
      >
        <ModalContent className="bg-white rounded-xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl">
                몬티홀 문제
              </ModalHeader>
              <ModalBody className="text-lg font-semibold">
                <p>{MONTIHALL_RULL[0]}</p>
                <p>{MONTIHALL_RULL[1]}</p>
                <p>{MONTIHALL_RULL[2]}</p>
                <p>{MONTIHALL_RULL[3]}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="hover:bg-[#fdc4c4] font-semibold text-red-400 rounded-lg"
                  variant="light"
                  onPress={onClose}
                >
                  닫기
                </Button>
                <Button
                  className="hover:bg-opacity-75 bg-[#5ea615] font-semibold text-white rounded-lg"
                  onPress={onClose}
                >
                  시작하기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuideDoor;
