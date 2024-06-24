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

const labels = ["January", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [120, 199, 418],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [98, 129, 218],
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
      text: "Chart.js Bar Chart",
    },
  },
};
const ScoreBox = () => {
  return (
    <div className="w-[720px] h-[160px] border border-black ">
      <div className="flex text-2xl font-semibold text-black">통계</div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ScoreBox;
