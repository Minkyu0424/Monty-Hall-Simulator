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
}

const Door = ({ doorSize, isOpen, onClick, isStart }: DoorProps) => {
  const doorIndex = DOOR_COUNTS.indexOf(doorSize);
  const doorWidth = DOOR_SIZE_W[doorIndex];
  const doorHeight = DOOR_SIZE_H[doorIndex];

  return (
    <div
      style={{ width: `${doorWidth}px`, height: `${doorHeight}px` }}
      className={`flex relative bg-[#E3CAA5] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl`}
      onClick={onClick}
    >
      {isStart && isOpen ? <div>염소</div> : <div>x</div>}
      {}
    </div>
  );
};

export default Door;
