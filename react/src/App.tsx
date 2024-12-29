import { Counter } from "./components/counter";
import { Header } from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-20">
        <Counter />
      </div>
    </div>
  );
};

export default App;
