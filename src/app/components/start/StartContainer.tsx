import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Door from "../common/Door";
import Welcome from "./Welcome";

const StartContainer = () => {
  return (
    <div className="flex justify-center flex-col items-center relative">
      <Welcome />
      <ToastContainer />
      <div className="flex gap-x-8 mt-20">
        <Door doorTitle={"시작"} />
        <Door doorTitle={"규칙"} />
        <Door doorTitle={"기록"} />
      </div>
    </div>
  );
};
export default StartContainer;
