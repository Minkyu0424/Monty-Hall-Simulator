"use client";

import { useState } from "react";

interface InputProps {
  title: string;
  onSubmit: void;
  inputStyles: string;
}

const CommonInput = ({ title, onSubmit, inputStyles }: InputProps) => {
  const [text, setText] = useState("");
  return (
    <input
      className={`w-[280px] h-[48px] bg-white border-[#e7e7e7] shadow-xl text-black text-lg rounded-xl pl-3 font-medium ${inputStyles}`}
      placeholder={title}
      onChange={(e) => setText(e.target.value)}
      value={text}
    ></input>
  );
};

export default CommonInput;
