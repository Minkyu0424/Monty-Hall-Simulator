"use client";
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

const labels = ["January"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [120],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [98],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "성공 현황 통계",
    },
  },
};
const ScoreBox = () => {
  return (
    <div className="w-[720px] h-[180px] border-[#000000] rounded-xl bg-white px-2 mb-2">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ScoreBox;
