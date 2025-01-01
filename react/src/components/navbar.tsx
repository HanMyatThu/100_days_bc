import { FaEnvelopeOpenText } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 px-8 py-1.5 bg-transparent border border-b-neutral-300 shadow-md w-full flex justify-between">
      <div className="flex flex-row gap-x-2 items-center justify-center cursor-pointer">
        <FaEnvelopeOpenText className="fill-cyan-700" />
        <span className="text-sm font-semibold">Todo App</span>
      </div>
      <button className="text-neutral-900 text-sm font-semibold hover:text-neutral-700">
        Login
      </button>
    </nav>
  );
};
