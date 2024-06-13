import StartContainer from "../components/start/StartContainer";
import Welcome from "../components/start/Welcome";

export default function Home() {
  return (
    <main className="w-full h-full text-white">
      <h1>프리텐다드 된거야?</h1>
      <Welcome />
      <StartContainer />
    </main>
  );
}
