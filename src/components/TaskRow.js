import { useDispatch, useSelector } from "react-redux";
// Styling
import { RowStyled } from "../styles";
import { CgTrash } from "react-icons/cg";

// Actions
import { deleteTask } from "../store/actions/taskActions";

const TaskRow = ({ task, whatever, somethingElse }) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.authReducer.user);
  // const task = props.task;
  // const {task} = props
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
