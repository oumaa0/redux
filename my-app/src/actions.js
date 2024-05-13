export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});