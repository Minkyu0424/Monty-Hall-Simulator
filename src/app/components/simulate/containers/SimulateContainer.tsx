import { useSimulationStore } from "@/app/store/useStore";
import Door from "../../common/Door";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  

  return (
    <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-dashed border-[#e7e7e7] border-[5px]">
      <Door doorSize={Number(options.doorAmount)} isOpen={false}/>
      
    </div>
  );
};

export default SimulateContainer;
