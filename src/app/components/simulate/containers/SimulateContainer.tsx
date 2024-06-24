import {
  DOOR_AMOUNT,
  DOOR_COUNTS,
  SELECTION_INIT,
} from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import { useEffect, useState } from "react";
import Door from "../../common/Door";
import Button from "../../common/Button";

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
      <div className="flex text-2xl text-black font-bold mb-2 justify-between">
        <div className="flex items-center">
          {Number.isNaN(options.turns)
            ? "자유모드 ∞"
            : "남은 횟수 : " + options.turns}
        </div>
        <div className="flex gap-x-3 items-center justify-center">
          <p>처음에 고른 문 :</p>
          <div className="w-7 h-11 border-[3px] rounded-xl border-green-500"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-[#e7e7e7] border-[5px] flex-wrap gap-x-3">
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
      <div className="w-full flex text-2xl text-black font-medium h-10">
        {isEnd ? (
          isCorrect ? (
            <div className="">
              <div>정답!</div>
              <Button onClickHandler={resetSimulate} title={"Next"} buttonStyle={"bg-white w-[180px] h-12"}/>
              <div>{selection.hasChanged ? "변화O 성공~" : "변화X  성공!"}</div>
            </div>
          ) : (
            <div>
              <div>실패!</div>
              <Button onClickHandler={resetSimulate} title={"Next"} buttonStyle={"bg-white w-[180px] h-12"}/>
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
