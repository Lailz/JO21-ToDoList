import axios from "axios";

// Action Types
export const DELETE_TASK = "DELETE_TASK";
export const FETCH_TASKS = "FETCH_TASKS";

// Actions
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/katakeet/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: {
          taskId: taskId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8080/katakeet");
      console.log(res.data);
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: App.js ~ line 18 ~ handleClick ~ error",
        error.message
      );
    }
  };
};
