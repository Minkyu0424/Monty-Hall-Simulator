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

const AnalChart = () => {
  const score = useScoreStore((state) => state.score);
  const changedScore = useScoreStore((state) => state.changedScore);
  const data = {
    labels,
    datasets: [
      {
        data: [changedScore.win, changedScore.lose, score.win, score.lose,],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  
  return <Bar options={options} data={data} />;
};

export default AnalChart;

export const options = {
  indexAxis: "y" as const,

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      color: "black",
      font: {
        weight: "bold" as const,
        size: 16,
        family: " 'Pretendard', sans-serif",
      },
      display: true,
      text: "승패 횟수 통계",
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
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

const labels = [
  "변경시 승리",
  "변경시 패배",
  "미 변경시 승리",
  "미변경시 패배",
];
