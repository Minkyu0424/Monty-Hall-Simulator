import {
  DOOR_AMOUNT,
  DOOR_COUNTS,
  SELECTION_INIT,
} from "@/app/constants/simulate";
import { useScoreStore, useSimulationStore } from "@/app/store/useStore";
import { useEffect, useState } from "react";
import Button from "../../common/Button";
import Door from "../../common/Door";
import Analystic from "@/app/ui/Icons/Analystic";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  const setOptions = useSimulationStore((state) => state.setOptions);
  const score = useScoreStore((state) => state.score);
  const setScore = useScoreStore((state) => state.setScore);
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
      setScore(index === winningIndex ? score + 1 : score);
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
      <div className="flex text-[22px] text-black font-bold mb-1 justify-between px-3">
        <div className="flex items-center">
          {Number.isNaN(options.turns)
            ? "자유모드 ∞"
            : "남은 횟수 : " + options.turns}
        </div>
        <div className="flex gap-x-3 items-center justify-center">
          <p>처음에 고른 문 :</p>
          <div className="w-6 h-9 border-[3px] rounded-lg border-green-500"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[720px] h-[520px] bg-white px-2 rounded-xl flex-wrap gap-x-3">
        {doors.map((_, index) => (
          <Door
            selected={selection.initialDoor === index}
            isStart={isStart}
            key={index}
            doorSize={options.doorAmount}
            isOpen={revealedDoors[index]}
            isCar={index === winningIndex}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
      <div className="w-full flex text-xl text-black font-bold h-10">
        {isEnd ? (
          <div className="w-full h-full flex justify-between items-center px-4 mt-2">
            <div className="flex gap-x-2">
              {isCorrect ? "⭕ 정답!" : "❌ 오답!"}
              {/* <div>{selection.hasChanged ? "변화O 성공~" : "변화X  성공!"}</div> */}
              <div>총 성공 횟수 : {score}</div>
            </div>
            <div className="flex">
              <Button
                onClickHandler={resetSimulate}
                title={"Next"}
                buttonStyle={
                  "bg-[#70b927] w-[100px] h-10 text-white hover:bg-[#5ea615]"
                }
              />
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center h-10 mt-2 px-4 justify-between">
            <div className="flex gap-x-2 items-center">통계 <Analystic /></div>
            
            <p>
              {selection.initialDoor &&
                isSelected &&
                "👆 최종 선택을 해주세요!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulateContainer;
