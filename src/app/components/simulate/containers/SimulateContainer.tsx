import {
  DOOR_AMOUNT,
  DOOR_COUNTS,
  SELECTION_INIT,
} from "@/app/constants/simulate";
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
  const [selection, setSelection] = useState<selectionState>(SELECTION_INIT);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);

  useEffect(() => {
    const winningIdx = Math.floor(Math.random() * doorCnt);
    setWinningIndex(winningIdx);
  }, []);

  const handleSelect = (index: number) => {
    if (!isStart) {
      setIsStart(true);
      setSelection({ initialDoor: index, hasChanged: false });
    }
    if (!isSelected) {
      const newRevealedDoors = initDoors.slice();
      for (let i = 0; i < doorCnt; i++) {
        if (i !== index && i !== winningIndex) newRevealedDoors[i] = true;
      }
      if (index === winningIndex) newRevealedDoors[winningIndex - 1] = false;
      setRevealedDoors(newRevealedDoors);
      setIsSelected(true);
    } else {
      setIsSelected(false);
      setIsEnd(true);
      setIsCorrect(index === winningIndex);
      setSelection((prev) => ({
        ...prev,
        hasChanged: index !== prev.initialDoor,
      }));
      const newRevealedDoors = Array(doorCnt).fill(true);
      setRevealedDoors(newRevealedDoors);
    }
  };

  const resetSimulate = () => {
    setIsStart(false);
    setIsEnd(false);
    setIsCorrect(false);
    setSelection(SELECTION_INIT);
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
              <div>정답!</div>
              <Button onClick={resetSimulate}>다음 시뮬레이션</Button>
              <div>{selection.hasChanged ? "변화O 성공~" : "변화X  성공!"}</div>
            </div>
          ) : (
            <div>
              <div>실패!</div>
              <Button onClick={resetSimulate}>다음 시뮬레이션</Button>
              <div>{selection.hasChanged ? "변화O  실패~" : "변화X 실패"}</div>
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
