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
      text: "시뮬레이션 통계",
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

const labels = ["1번째", "2번째", "3번째", "4번째"];

export const data = {
  labels,
  datasets: [
    {
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const AnalChart = () => {
  return <Bar options={options} data={data} />;
};

export default AnalChart;
