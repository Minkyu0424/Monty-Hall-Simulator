"use client";
import {
  DOOR_COUNTS,
  DOOR_SIZE_H,
  DOOR_SIZE_W,
} from "@/app/constants/simulate";

interface DoorProps {
  doorSize: string;
  isOpen: boolean;
  onClick: () => void;
  isStart: boolean;
  isCar: boolean;
  selected:boolean
}

const Door = ({ doorSize, isOpen, onClick, isStart, isCar,selected }: DoorProps) => {
  const doorIndex = DOOR_COUNTS.indexOf(doorSize);
  const doorWidth = DOOR_SIZE_W[doorIndex];
  const doorHeight = DOOR_SIZE_H[doorIndex];

  return (
    <div
      aria-disabled={isOpen}
      style={{ width: `${doorWidth}px`, height: `${doorHeight}px` }}
      className={`flex relative bg-[#E3CAA5] ${
        !isOpen && "hover:animate-wiggle cursor-pointer"
      } ${selected&&'border-4 border-green-500' } rounded-xl items-center justify-center  shadow-xl text-black text-4xl`}
      onClick={!isOpen ? onClick : undefined}
    >
      {isOpen ? isCar ? <div>🚗</div> : <div>🐐</div> : <>❓</>}
    </div>
  );
};

export default Door;
