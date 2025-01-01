import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface HintProps {
  children: React.ReactNode;
  label: string;
  side: "top" | "bottom";
}

export const Hint = ({ children, label, side }: HintProps) => {
  const [showHint, setShowHint] = useState(false);

  const mouseEnter = () => {
    setShowHint(true);
  };

  const onMouseLeave = () => {
    setShowHint(false);
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative cursor-pointer"
    >
      {children}

      {showHint && (
        <div
          className={twMerge(
            "absolute max-h-10 h-fit max-w-40 w-fit px-2 py-1 items-center justify-center bg-black text-neutral-50 text-xs font-extralight bottom-4 text-nowrap rounded-md shadow-sm z-20",
            side === "top" ? "bottom-4" : "-bottom-6"
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
};
