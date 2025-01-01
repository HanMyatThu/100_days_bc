import { useEffect, useState } from "react";

import { EStatus, ITodo } from "../type";
import { Task } from "./task";

const getData = async (): Promise<ITodo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return [
    {
      id: Math.floor(Math.random() * 100),
      title: "Learn how to cook",
      status: EStatus.OPEN,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "how to dance",
      status: EStatus.OPEN,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "save money and go to USA",
      status: EStatus.OPEN,
    },
  ];
};

export const TaskList = () => {
  const [data, setData] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();

      setData(response);
    };

    fetchData();
  }, []);

  const handleOnChange = (id: number) => {
    setData((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: EStatus.COMPLETED } : todo
      )
    );
  };

  const handleRemoveTodo = (id: number) => {
    setData((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {data.map((todo) => (
        <Task
          key={todo.id}
          title={todo.title}
          id={todo.id}
          status={todo.status}
          onChange={handleOnChange}
          onDelete={handleRemoveTodo}
        />
      ))}
    </>
  );
};
