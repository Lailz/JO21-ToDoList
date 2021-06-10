// Action Types
export const DELETE_TASK = "DELETE_TASK";

// Actions
export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: {
      taskId: taskId,
    },
  };
};
