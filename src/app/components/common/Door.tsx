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
}

const Door = ({ doorSize, isOpen, onClick, isStart, isCar }: DoorProps) => {
  const doorIndex = DOOR_COUNTS.indexOf(doorSize);
  const doorWidth = DOOR_SIZE_W[doorIndex];
  const doorHeight = DOOR_SIZE_H[doorIndex];

  return (
    <div
      style={{ width: `${doorWidth}px`, height: `${doorHeight}px` }}
      className={`flex relative bg-[#E3CAA5] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl`}
      onClick={onClick}
    >
      {isStart && isOpen ? <div>열린거</div> : <div>안 열린거</div>}
      {isOpen ? (
        isCar ? (
          <div>나는 차였습니다~</div>
        ) : (
          <div>나는 염소였습니다~</div>
        )
      ) : (
        <></>
      )}
      {}
    </div>
  );
};

export default Door;
