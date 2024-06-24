"use client";
interface ButtonProps {
  onClickHandler: () => void;
  title: string;
  buttonStyle: string;
  disabled?:boolean
}
const Button = ({ onClickHandler, title, buttonStyle,disabled }: ButtonProps) => {
  return (
    <div>
      <button
        className={` text-2xl font-bold  shadow-lg rounded-xl ${buttonStyle}`}
        onClick={onClickHandler}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
