import { DELETE_TASK, FETCH_TASKS } from "./actions";

const initialState = {
  tasks: [],
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
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
