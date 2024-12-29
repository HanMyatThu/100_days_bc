import { FaClock } from "react-icons/fa";

export const Header = () => {
  return (
    <nav className="flex fixed top-0 w-full mx-auto items-center justify-center py-1.5 border-b border-neutral-500">
      <div className="flex flex-row gap-x-2 items-center justify-center">
        <span className="text-sm text-neutral-200 font-semibold">
          Counter App
        </span>
        <FaClock className="fill-neutral-200 size-4" />
      </div>
    </nav>
  );
};
