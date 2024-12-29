import { FaPlus, FaMinus, FaReply } from "react-icons/fa";
import { useState } from "react";

import { Button } from "./button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increament = () => {
    setCounter(() => counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(() => counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center">
      <div className="max-w-[300px] h-full w-full flex flex-col gap-y-4">
        <Button onClick={increament} icon={FaPlus} />
        <div className="flex border border-neutral-100 bg-neutral-200 items-center justify-center text-[64px] rounded-sm shadow-lg">
          {counter}
        </div>
        <Button onClick={decrement} icon={FaMinus} />
        <Button
          onClick={reset}
          icon={FaReply}
          className="bg-red-500 text-neutral-200 hover:bg-red-500/80"
        />
      </div>
    </div>
  );
};
