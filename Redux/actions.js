import { ADD_TASK, REMOVE_TASK } from "./ActionTypes";

export const addTASK = (TASK) => ({
  type: ADD_TASK,
  payload: TASK,
});

export const removeTASK = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
