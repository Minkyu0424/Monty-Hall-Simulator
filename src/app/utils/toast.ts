import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonOptions: any = {
  theme: "light",
  closeOnClick: true,
  autoClose: 2000,
  position: "top-center",
  pauseOnHover: true,
  transition: Bounce,
  style: { fontSize: 16, color: "black", fontFamily: "Pretendard" },
};

const readyAlert = () => {
  toast.warning("미안, 아직 준비중이에요!", {
    icon: () => "🚧",
    ...commonOptions,
  });
};

const insertAlert = () => {
  toast.warning("시뮬레이션 조건을 모두 입력해주세요", {
    ...commonOptions,
  });
};

export { readyAlert, insertAlert };
