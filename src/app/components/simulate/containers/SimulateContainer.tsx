import { DOOR_AMOUNT, DOOR_COUNTS } from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import { useState } from "react";
import Button from "../../common/Button";
import Door from "../../common/Door";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  const setOptions = useSimulationStore((state) => state.setOptions);
  const doorIndex = DOOR_COUNTS.indexOf(options.doorAmount);
  const repeat = DOOR_AMOUNT[doorIndex];
  const [openDoorIndex, setOpenDoorIndex] = useState(
    Math.floor(Math.random() * repeat)
  );

  const resetSimulate = () => {
    setOptions({
      turns: options.turns,
    });
    setOpenDoorIndex(Math.floor(Math.random() * repeat));
  };
  console.log(options.turns);

  return (
    <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-[#e7e7e7] border-[5px] flex-wrap gap-x-3">
      {Array.from({ length: repeat }, (_, index) => (
        <Door
          key={index}
          doorSize={options.doorAmount}
          isOpen={index === openDoorIndex}
        />
      ))}
      <Button
        onClickHandler={resetSimulate}
        title={"초기화"}
        buttonStyle={"text-[#000000] bg-[#f26b6b] hover:bg-[#fca6a6]"}
        disabled={false}
      />
    </div>
  );
};

export default SimulateContainer;
