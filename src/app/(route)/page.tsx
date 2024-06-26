import Image from "next/image";
import Link from "next/link";
import StartContainer from "../components/start/StartContainer";
export default function Home() {
  return (
    <main className="w-[840px] min-h-screen text-white bg-[#fbe7b5] px-6 py-6 rounded-2xl relative">
      <StartContainer />
      <Link href={"https://github.com/Minkyu0424/Monty-Hall-Simulator"}>
        <div className="absolute bottom-6 left-6 cursor-pointer hover:animate-wiggle text-sm text-black font-semibold">
          <Image
            src={"/githubIcon.png"}
            alt={"github"}
            width={36}
            height={36}
            color="black"
          />
          {"Minkyu0424"}
        </div>
      </Link>
      <Link href={"https://brilliant.org/wiki/monty-hall-problem/"}>
        <div className="absolute bottom-6 right-6 cursor-pointer hover:animate-bounce">
          <Image
            src={"/mygoat.png"}
            alt={"goat"}
            width={160}
            height={102}
            color="black"
          />
        </div>
      </Link>
    </main>
  );
}
