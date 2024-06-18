import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GuideDoor from "../rule/GuideDoor";
import Welcome from "./Welcome";
import StartDoor from "./StartDoor";

const StartContainer = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Welcome />
      <ToastContainer />
      <div className="flex gap-x-8 mt-20">
        <Link href={"/simulate"}>
          <StartDoor doorTitle={"시작"} />
        </Link>
        <GuideDoor />
        <StartDoor doorTitle={"기록"} />
      </div>
    </div>
  );
};
export default StartContainer;
