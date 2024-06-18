"use client";
import {
  DOOR_COUNTS,
  DOOR_SIZE_H,
  DOOR_SIZE_W,
} from "@/app/constants/simulate";

interface DoorProps {
  doorSize: string;
  isOpen: boolean;
}

const Door = ({ doorSize, isOpen }: DoorProps) => {
  const doorIndex = DOOR_COUNTS.indexOf(doorSize);
  const doorWidth = DOOR_SIZE_W[doorIndex];
  const doorHeight = DOOR_SIZE_H[doorIndex];

  return (
    <div
      style={{ width: `${doorWidth}px`, height: `${doorHeight}px` }}
      className={`flex relative bg-[#000000] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl`}
    >
      <div className="w-6 h-6 rounded-full flex items-center justify-center absolute top-[130px] right-4 bg-black">
        <div className="w-2 h-2 rounded-full  bg-white"></div>
      </div>
    </div>
  );
};

export default Door;
