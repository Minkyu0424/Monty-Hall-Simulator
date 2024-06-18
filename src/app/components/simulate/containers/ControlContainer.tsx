"use client";

import DropDown from "../../common/Dropdown";

const ControlContainer = () => {
  return (
    <div>
      <DropDown
        options={["a", "b", "c", "d"]}
        title={"골라요오"}
        onSelect={() => console.log("hi")}
      />
    </div>
  );
};

export default ControlContainer;
