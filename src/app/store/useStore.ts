"use client";
import { create } from "zustand";
import { OPTION_INIT } from "../constants/simulate";

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
  options: OPTION_INIT,
  setOptions: (newOptions) =>
    set((state) => ({
      options: { ...state.options, ...newOptions },
    })),
  reset: () =>
    set({
      options: OPTION_INIT,
    }),
}));

type Score = {
  score: number;
  setScore: (score: number) => void;
  changedScore: number;
  setChangedScore: (changedScore: number) => void;
};

export const useScoreStore = create<Score>((set) => ({
  score: 0,
  setScore: (score) => set({ score }),
  changedScore: 0,
  setChangedScore: (changedScore) => set({ changedScore }),
}));
