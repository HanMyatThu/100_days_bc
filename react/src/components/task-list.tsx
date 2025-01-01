import { FaTrash } from "react-icons/fa";
import { Hint } from "./hint";

export const TaskList = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-x-2">
        <input
          type="checkbox"
          className="coursor-pointer disabled:cursor-not-allowed"
        />
        <span className="font-light text-xs text-black">
          Get a job in Netherlands
        </span>
      </div>

      <Hint label="Remove task" side="bottom">
        <FaTrash className="size-3 cursor-pointer fill-red-700" />
      </Hint>
    </div>
  );
};
