import { DOOR_AMOUNT, DOOR_COUNTS } from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import Door from "../../common/Door";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  const setOptions = useSimulationStore((state) => state.setOptions);
  const doorIndex = DOOR_COUNTS.indexOf(options.doorAmount);
  const doorCnt = DOOR_AMOUNT[doorIndex];
  const initDoors = Array(doorCnt).fill(false);

  const [doors, setDoors] = useState<boolean[]>(initDoors);
  const [isStart, setIsStart] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [revealedDoors, setRevealedDoors] = useState<boolean[]>(initDoors);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);
  console.log(options.turns, "횟수");

  useEffect(() => {
    const winningIdx = Math.floor(Math.random() * doorCnt);
    setWinningIndex(winningIdx);
  }, []);

  const handleSelect = (index: number) => {
    setIsStart(true);
    setIsSelected(true);
    if (!isSelected) {
      const newRevealedDoors = initDoors;
      for (let i = 0; i < doorCnt; i++) {
        if (i !== index && i !== winningIndex) newRevealedDoors[i] = true;
      }
      if (index === winningIndex) newRevealedDoors[winningIndex - 1] = false;
      setRevealedDoors(newRevealedDoors);
    } else {
      setIsSelected(false);
      setIsEnd(true);
      setIsCorrect(index === winningIndex);
      const newRevealedDoors = Array(doorCnt).fill(true);
      setRevealedDoors(newRevealedDoors);
    }
  };

  const resetSimulate = () => {
    setIsStart(false);
    if (options.turns > 0 || Number.isNaN(options.turns)) {
      setOptions({ turns: options.turns - 1 });
      setDoors(initDoors);
      setRevealedDoors(initDoors);
      const winningIdx = Math.floor(Math.random() * doorCnt);
      setWinningIndex(winningIdx);
    }
  };

  return (
    <div>
      <div className="flex text-3xl text-black font-bold">
        {Number.isNaN(options.turns)
          ? "자유모드 ∞"
          : "남은 횟수 : " + options.turns}
      </div>
      <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-[#e7e7e7] border-[5px] flex-wrap gap-x-3">
        {doors.map((_, index) => (
          <Door
            isStart={isStart}
            key={index}
            doorSize={options.doorAmount}
            isOpen={revealedDoors[index]}
            isCar={index === winningIndex}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
      <div className="text-2xl text-black font-medium h-10">
        {isEnd ? (
          isCorrect ? (
            <div>
              정답!<Button onClick={resetSimulate}>다음 시뮬레이션</Button>
            </div>
          ) : (
            <div>
              실패!<Button onClick={resetSimulate}>다음 시뮬레이션</Button>
            </div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SimulateContainer;
