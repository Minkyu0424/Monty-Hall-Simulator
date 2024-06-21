import {
  DOOR_AMOUNT,
  DOOR_COUNTS,
  SIM_COUNTS,
  SIM_TURNS,
} from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import { useEffect, useState } from "react";
import Button from "../../common/Button";
import Door from "../../common/Door";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  const setOptions = useSimulationStore((state) => state.setOptions);
  const doorIndex = DOOR_COUNTS.indexOf(options.doorAmount);
  const turnsIndex = SIM_COUNTS.indexOf(options.turns);
  const doorCnt = DOOR_AMOUNT[doorIndex];
  let turnsCnt = SIM_TURNS[turnsIndex];

  const [doors, setDoors] = useState<boolean[]>([]);
  const [isStart, setIsStart] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [revealedDoors, setRevealedDoors] = useState<boolean[]>([]);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);

  useEffect(() => {
    const newDoors = Array(doorCnt).fill(false);
    const winningIdx = Math.floor(Math.random() * doorCnt);
    setDoors(newDoors);
    setRevealedDoors(newDoors);
    setWinningIndex(winningIdx);
    console.log("초기화 시작");
    console.log("자동차 인덱스", winningIdx);
    console.log("초기화 시작");
  }, [doorCnt]);

  const handleSelect = (index: number) => {
    setIsStart(true);
    setIsSelected(true);
    if (!isSelected) {
      const newRevealedDoors = Array(doorCnt).fill(false);
      for (let i = 0; i < doorCnt; i++) {
        if (i !== index && i !== winningIndex) newRevealedDoors[i] = true;
      }
      if (index === winningIndex) newRevealedDoors[winningIndex - 1] = true;
      setRevealedDoors(newRevealedDoors);
    } else {
      turnsCnt -= 1;
      setIsSelected(false);
      const newRevealedDoors = Array(doorCnt).fill(true);
      setRevealedDoors(newRevealedDoors);
    }
  };

  const resetSimulate = () => {
    setOptions({
      turns: "",
      doorAmount: "",
      user: "",
      onlyResult: false,
      isPause: false,
    });
    setIsStart(false);
    //초기화 횟수
    if (turnsCnt > 0) {
      const newDoors = Array(doorCnt).fill(false);
      const winningIdx = Math.floor(Math.random() * doorCnt);
      newDoors[winningIdx] = true;
      setDoors(newDoors);
      setWinningIndex(winningIdx);
      setRevealedDoors(Array(doorCnt).fill(false));
    }
  };

  return (
    <div>
      <div>{turnsCnt} 남은 반복 수</div>
      <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-[#e7e7e7] border-[5px] flex-wrap gap-x-3">
        {doors.map((isWinning, index) => (
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
      <Button
        onClickHandler={resetSimulate}
        title={"초기화"}
        buttonStyle={"text-[#000000] bg-[#f26b6b] hover:bg-[#fca6a6]"}
      />
    </div>
  );
};

export default SimulateContainer;
