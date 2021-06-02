import { RowStyled } from "../styles";

const TaskRow = (props) => {
  return (
    <RowStyled>
      <td>{props.task.status}</td>
      <td>{props.task.name}</td>
      <td className={props.task.priority}>
        {props.task.priority.toUpperCase()}
      </td>
    </RowStyled>
  );
};

export default TaskRow;
