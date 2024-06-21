import { DOOR_AMOUNT, DOOR_COUNTS } from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import { useEffect, useState } from "react";
import Button from "../../common/Button";
import Door from "../../common/Door";

const SimulateContainer = () => {
  const options = useSimulationStore((state) => state.options);
  const setOptions = useSimulationStore((state) => state.setOptions);
  const doorIndex = DOOR_COUNTS.indexOf(options.doorAmount);
  const repeat = DOOR_AMOUNT[doorIndex];

  const [doors, setDoors] = useState<boolean[]>([]);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealedDoors, setRevealedDoors] = useState<boolean[]>([]);

  useEffect(() => {
    if (repeat > 0) {
      const newDoors = Array(repeat).fill(false);
      const winningIdx = Math.floor(Math.random() * repeat);
      newDoors[winningIdx] = true;
      setDoors(newDoors);
      setWinningIndex(winningIdx);
      setSelectedIndex(null);
      setRevealedDoors(Array(repeat).fill(false));
    }
  }, [repeat]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);

    // Reveal doors logic
    const newRevealedDoors = Array(repeat).fill(false);
    for (let i = 0; i < repeat; i++) {
      if (i !== index && i !== winningIndex) {
        newRevealedDoors[i] = true;
      }
    }

    // If the selected index is the winning door, reveal one less
    if (index === winningIndex) {
      const revealCount = repeat - 2;
      let revealed = 0;
      for (let i = 0; i < repeat; i++) {
        if (i !== index && i !== winningIndex) {
          newRevealedDoors[i] = true;
          revealed++;
          if (revealed >= revealCount) break;
        }
      }
    }

    setRevealedDoors(newRevealedDoors);
  };

  const resetSimulate = () => {
    setOptions({
      turns: "",
      doorAmount: "",
      user: "",
      onlyResult: false,
      isPause: false,
    });
    if (repeat > 0) {
      const newDoors = Array(repeat).fill(false);
      const winningIdx = Math.floor(Math.random() * repeat);
      newDoors[winningIdx] = true;
      setDoors(newDoors);
      setWinningIndex(winningIdx);
      setSelectedIndex(null);
      setRevealedDoors(Array(repeat).fill(false));
    }
  };

  return (
    <div>
        <div>{repeat} 남은 반복 수</div>
      <div className="flex items-center justify-center w-[720px] h-[520px] bg-white border-[#e7e7e7] border-[5px] flex-wrap gap-x-3">
        {doors.map((isWinning, index) => (
          <Door
            key={index}
            doorSize={options.doorAmount}
            isOpen={
              revealedDoors[index] || (selectedIndex === index && isWinning)
            }
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
