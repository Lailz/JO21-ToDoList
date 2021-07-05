import instance from "./instance";
import * as actionTypes from "./types";

// Actions
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/katakeet/${taskId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
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
      const res = await instance.get("/katakeet");
      console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_TASKS,
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
