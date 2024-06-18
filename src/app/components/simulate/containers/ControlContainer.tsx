"use client";

import { DOOR_COUNTS, OPTION_INIT, SIM_COUNTS } from "@/app/constants/simulate";
import { useSimulationStore } from "@/app/store/useStore";
import { insertAlert } from "@/app/utils/toast";
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../common/Button";
import DropDown from "../../common/Dropdown";
import Input from "../../common/Input";

const ControlContainer = () => {
  const [options, setOptions] = useState<simulate_option>(OPTION_INIT);
  const [isSelected, setIsSelected] = useState(false);
  const isStart = useSimulationStore((state) => state.isStart);
  const setIsStart = useSimulationStore((state) => state.setIsStart);
  const isFilled =
    options.turns !== "" && options.doorAmount !== "" && options.user !== "";

  console.log(isStart, "시작여부");
  console.log(options, "옵션여부");

  const startSimulate = () => {
    if (isFilled) {
      setIsStart(true);
    } else {
      insertAlert();
    }
  };

  const resetSimulate = () => {
    setIsStart(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-col mt-10">
      <ToastContainer />
      <div className="flex gap-x-8">
        <div className="flex flex-col gap-y-6">
          <DropDown
            options={DOOR_COUNTS}
            title={"시뮬레이션 문의 개수"}
            onSelect={(option) =>
              setOptions((prevOptions) => ({
                ...prevOptions,
                doorAmount: option,
              }))
            }
          />
          <div className="bg-white w-[280px] h-12 rounded-2xl flex gap-x-6 items-center justify-center">
            <p className="text-black text-lg font-semibold">결과만 보기</p>
            <Switch
              size="lg"
              isSelected={isSelected}
              onValueChange={setIsSelected}
              className={`${
                isSelected ? "bg-[#87b45a]" : "bg-[#a9a9a9]"
              } rounded-2xl flex items-center justify-center`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <DropDown
            options={SIM_COUNTS}
            title={"시뮬레이션 횟수"}
            onSelect={(option) =>
              setOptions((prevOptions) => ({
                ...prevOptions,
                turns: option,
              }))
            }
          />
          <Input
            title={"사용자의 이름을 입력"}
            onSubmit={(name) =>
              setOptions((prevOptions) => ({
                ...prevOptions,
                user: name,
              }))
            }
            inputStyles={""}
          />
        </div>
      </div>
      <div className="flex mt-12 gap-x-8">
        {" "}
        <Button
          onClickHandler={startSimulate}
          title={"시작"}
          buttonStyle={`bg-[#5ea615] ${
            isStart || "hover:bg-[#87b45a] cursor-pointer"
          }`}
          disabled={isStart}
        />
        <Button
          disabled={!isStart}
          onClickHandler={resetSimulate}
          title={"초기화"}
          buttonStyle={`text-[#000000] bg-[#f26b6b] ${
            !isStart || "hover:bg-[#fca6a6] cursor-pointer"
          }`}
        />
      </div>
    </div>
  );
};

export default ControlContainer;
