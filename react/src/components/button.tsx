import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  onClick: () => void;
  icon: IconType;
  className?: string;
}
export const Button = ({ onClick, icon: Icon, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "w-full bg-white flex items-center justify-center py-1.5 rounded-md shadow-sm hover:bg-neutral-200",
        className
      )}
    >
      <Icon />
    </button>
  );
};
