import tasksData from "../tasks";
import { DELETE_TASK } from "./actions";

const initialState = {
  tasks: tasksData,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      const tasksToKeep = state.tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
      return {
        ...state, // give me the last version of tasks and counter
        tasks: tasksToKeep,
      };
    case "CREATE_TASK":
      return state;
    default:
      return state;
  }
};

export default reducer;
