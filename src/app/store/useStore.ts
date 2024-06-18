"use client";
import { create } from "zustand";

const initialOptions: simulate_option = {
  turns: "",
  doorAmount: "",
  user: "",
  onlyResult: false,
  isPause: false,
};

type Store = {
  isStart: boolean;
  setIsStart: (isStart: boolean) => void;
  options: simulate_option;
  setOptions: (options: Partial<simulate_option>) => void;
  reset: () => void;
};

export const useSimulationStore = create<Store>((set) => ({
  isStart: false,
  setIsStart: (isStart) => set({ isStart }),
  options: initialOptions,
  setOptions: (newOptions) =>
    set((state) => ({
      options: { ...state.options, ...newOptions },
    })),
  reset: () =>
    set({
      options: initialOptions,
    }),
}));
