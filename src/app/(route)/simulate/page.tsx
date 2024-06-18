import ControlContainer from "@/app/components/simulate/containers/ControlContainer";
import DoorsContainer from "@/app/components/simulate/containers/DoorsContainer";

const simulatePage = () => {
  return (
    <main className="w-[840px] min-h-screen text-white bg-[#fbe7b5] px-6 py-6 rounded-2xl relative">
      <DoorsContainer />
      <ControlContainer />
    </main>
  );
};

export default simulatePage;
