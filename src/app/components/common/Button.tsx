'use client'
interface ButtonProps {
  onClickHandler: void;
  title: string;
  buttonStyle: string;
}
const Button = ({ onClickHandler, title, buttonStyle }: ButtonProps) => {
  return (
    <div>
      <button className={`w-[280px] h-16 text-2xl font-bold cursor-pointer shadow-lg rounded-xl ${buttonStyle}`} onClick={() => onClickHandler}>
        {title}
      </button>
    </div>
  );
};

export default Button;
