import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex w-[480px] h-28 bg-[#fffcf0] rounded-2xl text-3xl items-center justify-center text-black font-bold gap-x-5 mt-20">
      <Image className="-scale-x-100" src={"/goatLogo.png"} alt={"염소로고"} width={42} height={42} />
      <div>몬티홀 문제 시뮬레이터</div>
      <Image src={"/goatLogo.png"} alt={"염소로고"} width={42} height={42} />
    </div>
  );
};

export default Welcome;
