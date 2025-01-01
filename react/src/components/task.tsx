import { FaTrash } from "react-icons/fa";

import { Hint } from "./hint";
import { EStatus } from "../type";

interface TaskProps {
  id: number;
  title: string;
  status: EStatus;
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
}

export const Task = ({ id, title, status, onChange, onDelete }: TaskProps) => {
  const handleOnChange = () => {
    onChange(id);
  };

  const isDisabled = status === EStatus.COMPLETED;

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-x-2 relative">
        {isDisabled && (
          <div className="absolute border-b border-black bottom-1.5 w-full" />
        )}
        <input
          type="checkbox"
          disabled={isDisabled}
          onChange={handleOnChange}
          className="coursor-pointer disabled:cursor-not-allowed"
        />
        <span className="font-light text-xs text-black">{title}</span>
      </div>

      <Hint label="Remove task" side="bottom">
        <FaTrash
          className="size-3 cursor-pointer fill-red-700"
          onClick={() => onDelete(id)}
        />
      </Hint>
    </div>
  );
};
