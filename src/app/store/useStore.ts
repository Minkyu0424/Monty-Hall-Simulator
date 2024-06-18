"use client";
import { create } from "zustand";

type Store = {
  isStart: boolean;
  setIsStart: (isStart: boolean) => void;
};

export const useSimulationStore = create<Store>((set) => ({
  isStart: false,
  setIsStart: (isStart) => set({ isStart }),
}));
