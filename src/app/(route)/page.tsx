import Image from "next/image";
import Link from "next/link";
import StartContainer from "../components/start/StartContainer";
export default function Home() {
  return (
    <main className="w-[840px] min-h-screen text-white bg-[#faedcd] px-6 py-6 rounded-2xl relative">
      <StartContainer />
      <Link href={"https://github.com/Minkyu0424/Monty-Hall-Simulator"}>
        <div className="absolute bottom-6 left-6 cursor-pointer">
          <Image
            src={"/githubIcon.png"}
            alt={"github"}
            width={36}
            height={36}
            color="black"
          />
        </div>
      </Link>
    </main>
  );
}
