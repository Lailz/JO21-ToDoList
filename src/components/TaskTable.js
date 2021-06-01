import tasks from "../tasks";

const TaskTable = () => {
  const newArray = tasks.map((task) => (
    <tr>
      <td>{task.status}</td>
      <td>{task.name}</td>
      <td className={task.priority}>{task.priority.toUpperCase()}</td>
    </tr>
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
      <tbody>{newArray}</tbody>
    </table>
  );
};

export default TaskTable;
