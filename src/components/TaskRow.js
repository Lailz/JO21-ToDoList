import { RowStyled } from "../styles";
import { CgTrash } from "react-icons/cg";

const TaskRow = (props) => {
  return (
    <RowStyled>
      <td>{props.task.status}</td>
      <td>{props.task.name}</td>
      <td className={props.task.priority}>
        {props.task.priority.toUpperCase()}
      </td>
      <td>
        <CgTrash onClick={() => props.deleteTask(props.task.id)} />
      </td>
    </RowStyled>
  );
};

export default TaskRow;
