// Components
import TaskRow from "./TaskRow";

// Data
import _tasks from "../tasks";
import { useState } from "react";

const TaskTable = () => {
  const [tasks, setTasks] = useState(_tasks);

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const kashkhaArray = tasks.map((task) => (
    <TaskRow deleteTask={deleteTask} task={task} key={task.id} />
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
