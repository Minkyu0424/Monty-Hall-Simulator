"use client";

import { ChangeEvent } from "react";

interface InputProps {
  title: string;
  onSubmit: (userName: string) => void;
  inputStyles?: string;
}

const CommonInput = ({ title, onSubmit, inputStyles }: InputProps) => {
  const typeName = (e: ChangeEvent<HTMLInputElement>) => {
    onSubmit(e.target.value);
  };
  return (
    <input
      className={`w-[280px] h-[48px] bg-white border-[#e7e7e7] shadow-xl text-black text-lg rounded-xl pl-3 font-medium focus:outline-none ${inputStyles}`}
      placeholder={title}
      onChange={(e) => typeName(e)}
    ></input>
  );
};

export default CommonInput;
