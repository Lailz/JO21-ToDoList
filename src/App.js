import tasks from "./tasks";
import "./App.css";

function App() {
  const newArray = tasks.map((task) => (
    <tr>
      <td>{task.status}</td>
      <td>{task.name}</td>
      <td className={task.priority}>{task.priority.toUpperCase()}</td>
    </tr>
  ));
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>
          <tr>
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
        </thead>
        <tbody>{newArray}</tbody>
      </table>
    </div>
  );
}

export default App;
