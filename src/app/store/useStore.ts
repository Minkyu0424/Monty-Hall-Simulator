"use client";
import { create } from "zustand";
import {
  CHANGED_SCORE_INIT,
  OPTION_INIT,
  SCORE_INIT,
} from "../constants/simulate";

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
  reset: () => void;
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
  reset: () =>
    set({
      score: SCORE_INIT,
      changedScore: CHANGED_SCORE_INIT,
    }),
}));
