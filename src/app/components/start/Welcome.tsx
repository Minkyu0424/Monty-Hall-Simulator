"use client";

import { useCountStore } from "@/app/store/useCountStore";

const Welcome = () => {
  const { count, inc } = useCountStore();
  return (
    <div>
      웰컴 컴포넌트의 카운트
      {count}
    </div>
  );
};

export default Welcome;
