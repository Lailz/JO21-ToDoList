import { useDispatch } from "react-redux";
// Styling
import { RowStyled } from "../styles";
import { CgTrash } from "react-icons/cg";

// Actions
import { deleteTask } from "../store/actions";

const TaskRow = (props) => {
  const dispatch = useDispatch();
  const task = props.task;
  return (
    <RowStyled>
      <td>{task.status}</td>
      <td>{task.name}</td>
      <td className={task.priority}>{task.priority.toUpperCase()}</td>
      <td>
        <CgTrash onClick={() => dispatch(deleteTask(task.id))} />
      </td>
    </RowStyled>
  );
};

export default TaskRow;
