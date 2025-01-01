import { Navbar } from "./components/navbar";
import { TaskList } from "./components/task-list";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="mt-20 px-8">
        <div className="w-full flex mx-auto items-center justify-center">
          <div className="border border-neutral-300 rounded-lg p-4 min-w-[320px] h-fit flex flex-col gap-y-5">
            <div className="flex items-center justify-center text-sm font-semibold">
              Your Task Lists
            </div>
            <hr />

            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
