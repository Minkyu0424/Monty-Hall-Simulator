"use client";
import { dropdown } from "@/app/ui/IconsPath";
import { useEffect, useRef, useState } from "react";
import Icons from "./Icons";

interface DropDownProps {
  options: string[];
  title: string;
  onSelect: (selectedTag: string) => void;
}

const DropDown = ({ options, title, onSelect }: DropDownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const textOption = title === "시뮬레이션 횟수" ? "회" : "개";

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="flex flex-col text-base font-semibold">
      <div
        className="flex relative w-[280px] h-[45px] rounded-[10px] bg-white border-2 border-[#CEAB93] cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <p className="m-auto text-black">
          {selectedOption ? selectedOption : title}
          {selectedOption && selectedOption !== "자유모드" && textOption}
        </p>
        <div className="absolute top-[16px] right-[10px]">
          <Icons name={dropdown} />
        </div>
      </div>
      <div className="relative">
        {isOpen && (
          <div
            className="absolute w-[280px] h-auto top-full left-0 bg-white rounded-[6px] border-x-2 border-b-2 border-[#CEAB93] overflow-auto scrollbar-hide z-[99]"
            ref={dropdownRef}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-full h-[37px] py-1 cursor-pointer hover:bg-gray-100 border-t-2 border-[#E3CAA5] ${
                  index == 0 ? "border-none" : ""
                }
                `}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                <span className="text-sm font-semibold text-black leading-[21px]">
                  {option}
                  {index !== 5 && textOption}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
