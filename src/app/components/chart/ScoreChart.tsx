"use client";
import { useScoreStore } from "@/app/store/useStore";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ScoreChart = () => {
  const score = useScoreStore((state) => state.score);
  const changedScore = useScoreStore((state) => state.changedScore);
  const data = {
    labels,
    datasets: [
      {
        label: "자동차",
        data: [score.win + changedScore.win],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "염소",
        data: [score.lose + changedScore.lose],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ScoreChart;

const labels = [""];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "rgb(0, 0, 0)",
        font: {
          weight: "normal" as const,
          size: 14,
          family: " 'Pretendard', sans-serif",
        },
      },
    },
    title: {
      color: "black",
      font: {
        weight: "bold" as const,
        size: 16,
        family: "'Pretendard', sans-serif",
      },
      display: true,
      text: "시뮬레이션 현황",
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14,
          family: "'Pretendard', sans-serif",
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 14,
          family: "'Pretendard', sans-serif",
        },
      },
    },
  },
};
