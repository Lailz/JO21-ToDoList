import * as actionTypes from "../actions/types";

const initialState = {
  tasks: [],
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    default:
      return state;
  }
};

export default reducer;
