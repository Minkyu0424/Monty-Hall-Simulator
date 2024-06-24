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

const labels = [""];

export const data = {
  labels,
  datasets: [
    {
      label: "바꾼경우 정답률",
      data: [98],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "안바꾼경우 정답률",
      data: [200],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          weight: "bold" as const,
          size: 16,
          family: " 'Pretendard', sans-serif",
        },
      },
    },
    title: {
      font: {
        weight: "bold" as const,
        size: 16,
        family: " 'Pretendard', sans-serif",
      },
      display: true,
      text: "정답률 통계",
    },
  },
};
const ScoreBox = () => {
  return (
    <div className="w-[720px] h-[180px] border-[#000000] rounded-xl bg-white px-2 mb-2">
      <div className="flex w-full h-full gap-x-4">
        <Bar options={options} data={data} />
        <div className="flex w-[300px] flex-col text-black text-2xl pl-4 pt-4 items-center justify-center gap-y-3">
          <p>시도횟수</p>
          <p>sds</p>
          <p>sds</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBox;
