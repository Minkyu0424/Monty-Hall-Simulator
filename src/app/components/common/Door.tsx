'use client'
import { readyAlert } from "@/app/utils/toast";

interface DoorProps {
  doorSize: number;
  isOpen:boolean;
}

const Door = ({ doorSize, isOpen }: DoorProps) => {
  return (
    <div
      className={`w-[${192/doorSize}px] h-[${288/doorSize}px] flex relative bg-[#fffcf0] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl`}
    >
      <div className="w-6 h-6 rounded-full flex items-center justify-center absolute top-[130px] right-4 bg-black">
        <div className="w-2 h-2 rounded-full  bg-white"></div>
      </div>
    </div>
  );
};

export default Door;
