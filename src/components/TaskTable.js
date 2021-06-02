// Components
import TaskRow from "./TaskRow";

// Data
import tasks from "../tasks";

const TaskTable = () => {
  const kashkhaArray = tasks.map((task) => (
    <TaskRow task={task} key={task.id} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
        </tr>
      </thead>
      <tbody>{kashkhaArray}</tbody>
    </table>
  );
};

export default TaskTable;
