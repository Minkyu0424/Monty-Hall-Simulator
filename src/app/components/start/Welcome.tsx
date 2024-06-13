import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex w-[400px] h-24 bg-[#FFFBE9] rounded-2xl text-3xl items-center justify-center text-black font-bold gap-x-4 mt-20">
      <Image src={"/goatLogo.png"} alt={"염소로고"} width={42} height={42} />
      <div>몬티홀 문제 시뮬레이터</div>
    </div>
  );
};

export default Welcome;
