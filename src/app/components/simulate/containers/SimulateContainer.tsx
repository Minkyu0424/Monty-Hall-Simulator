import { useSimulationStore } from "@/app/store/useStore";

const SimulateContainer = () => {
    const options = useSimulationStore((state) => state.options);

    return (
        <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-dashed border-[#e7e7e7] border-[5px]">
        <p className="text-[#b6b6b6] text-3xl font-semibold">🤔 원하는 시뮬레이션 조건을 선택해주세요</p>
      </div>
    );
};

export default SimulateContainer;