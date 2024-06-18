import ControlContainer from "@/app/components/simulate/containers/ControlContainer";
import DoorsContainer from "@/app/components/simulate/containers/DoorsContainer";
import BackSpace from "@/app/ui/Icons/BackSpace";
import Link from "next/link";

const simulatePage = () => {
  return (
    <main className="w-[840px] min-h-screen text-white bg-[#fbe7b5] px-6 py-6 rounded-2xl relative">
      <DoorsContainer />
      <ControlContainer />
      <Link href="/" className="absolute left-8 bottom-8 w-10 h-10">
        <BackSpace />
      </Link>
    </main>
  );
};

export default simulatePage;
