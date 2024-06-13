"use client";
import { useCountStore } from "@/app/store/useCountStore";

const StartContainer = () => {
  const { count, inc } = useCountStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
};
export default StartContainer;
