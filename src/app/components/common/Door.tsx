interface DoorProps {
  doorTitle: string;
  doorImg?: string;
}

const Door = ({ doorTitle, doorImg }: DoorProps) => {
  return (
    <div className="flex relative w-48 h-72 bg-[#fffcf0] hover:animate-wiggle rounded-xl items-center justify-center cursor-pointer shadow-xl">
      <div className="w-6 h-6 rounded-full flex items-center justify-center absolute top-[130px] right-4 bg-black">
        <div className="w-2 h-2 rounded-full  bg-white"></div>
      </div>
      <div className="text-3xl font-semibold text-black">{doorTitle}</div>
    </div>
  );
};

export default Door;
