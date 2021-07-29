import { useSelector } from "react-redux";

// Components
import TaskRow from "./TaskRow";

const TaskTable = ({ user }) => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
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
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>{kashkhaArray}</tbody>
    </table>
  );
};

export default TaskTable;
