"use client";

import { useSimulationStore } from "@/app/store/useStore";
import EmptyDoors from "../EmptyDoors";

const DoorsContainer = () => {
  const isStart = useSimulationStore((state) => state.isStart);

  return (
    <div className="flex items-center justify-center">
      {isStart ? <EmptyDoors /> : <EmptyDoors />}
    </div>
  );
};

export default DoorsContainer;
