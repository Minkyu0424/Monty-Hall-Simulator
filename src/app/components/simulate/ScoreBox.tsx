import ScoreChart from "../common/chart/ScoreChart";

const ScoreBox = () => {
  return (
    <div className="w-[720px] h-[180px] border-[#000000] rounded-xl bg-white px-2 mb-2">
      <div className="flex w-full h-full gap-x-4">
        <ScoreChart />
        <div className="flex w-[300px] flex-col text-black text-2xl pl-4 pt-4 items-center justify-center gap-y-3">
          <p>총 시도횟수</p>
          <p>바꾸고 맞춘 개수</p>
          <p>안 바꾸고 맞춘 개수</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBox;
