import { DOOR_AMOUNT, DOOR_COUNTS } from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import Door from "../../common/Door";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  const doorIndex = DOOR_COUNTS.indexOf(options.doorAmount);
  const repeat = DOOR_AMOUNT[doorIndex];

  return (
    <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-dashed border-[#e7e7e7] border-[5px] flex-wrap gap-x-3">
        {Array.from({ length: repeat }, (_, index) => (
          <Door key={index} doorSize={options.doorAmount} isOpen={false} />
        ))}
    </div>
  );
};

export default SimulateContainer;
