"use client";

import { useState } from "react";
import EmptyDoors from "../EmptyDoors";

const DoorsContainer = () => {
  const isChecked = useState(false);

  return <div className="flex items-center justify-center">{isChecked ? <EmptyDoors /> : <EmptyDoors />}</div>;
};

export default DoorsContainer;
