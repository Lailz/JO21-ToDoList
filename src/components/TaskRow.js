const TaskRow = (props) => {
  return (
    <tr>
      <td>{props.task.status}</td>
      <td>{props.task.name}</td>
      <td className={props.task.priority}>
        {props.task.priority.toUpperCase()}
      </td>
    </tr>
  );
};

export default TaskRow;
