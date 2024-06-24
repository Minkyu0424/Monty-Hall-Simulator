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
  score: winOrLose;
  setScore: (score: Partial<winOrLose>) => void;
  changedScore: winOrLose;
  setChangedScore: (changedScore: Partial<winOrLose>) => void;
};

export const useScoreStore = create<Score>((set) => ({
  score: { win: 0, lose: 0 },
  setScore: (newScore) =>
    set((state) => ({
      score: { ...state.score, ...newScore },
    })),
  changedScore: { win: 0, lose: 0 },
  setChangedScore: (newScore) =>
    set((state) => ({
      changedScore: { ...state.changedScore, ...newScore },
    })),
}));
