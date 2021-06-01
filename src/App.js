// Components
import Age from "./components/Age";
import Greeting from "./components/Greeting";
import TaskTable from "./components/TaskTable";

// Styling
import "./App.css";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <TaskTable />
    </div>
  );
}

export default App;
