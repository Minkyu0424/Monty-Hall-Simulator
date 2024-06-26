"use client";

import { useSimulationStore } from "@/app/store/useStore";
import EmptyDoors from "../EmptyDoors";
import SimulateContainer from "./SimulateContainer";

const DoorsContainer = () => {
  const isStart = useSimulationStore((state) => state.isStart);

  return (
    <div className="flex items-center justify-center">
      {isStart ? <SimulateContainer /> : <EmptyDoors />}
    </div>
  );
};

export default DoorsContainer;
