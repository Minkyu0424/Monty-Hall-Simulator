"use client";
import { readyAlert } from "@/app/utils/toast";

interface StartDoorProps {
  doorTitle: string;
  doorImg?: string;
}

const StartDoor = ({ doorTitle, doorImg }: StartDoorProps) => {
  const isRanking = () => {
    if (doorTitle === "기록") readyAlert();
  };
  return (
    <div
      className="flex relative w-48 h-72 bg-[#fffcf0] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl"
      onClick={isRanking}
    >
      <div className="w-6 h-6 rounded-full flex items-center justify-center absolute top-[130px] right-4 bg-black">
        <div className="w-2 h-2 rounded-full  bg-white"></div>
      </div>
      <div className="text-3xl font-semibold text-black">{doorTitle}</div>
    </div>
  );
};

export default StartDoor;
