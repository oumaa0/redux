import { ADD_TASK, EDIT_TASK, FILTER_TASKS } from './actions';

const initialState = {
  tasks: [
    {
      id: Math.random(),
      description: 'Task 1',
      isDone: false,
    },
    {
      id: Math.random(),
      description: 'Task 2',
      isDone: true,
    },
  ],
  filteredTasks: [],
  filter: 'all',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case FILTER_TASKS:
      const filter = action.payload;
      let filteredTasks = state.tasks;
      if (filter === 'done') {
        filteredTasks = state.tasks.filter((task) => task.isDone);
      } else if (filter === 'notDone') {
        filteredTasks = state.tasks.filter((task) => !task.isDone);
      } else {
        filteredTasks = state.tasks;
      }
      return {
        ...state,
        filteredTasks,
        filter,
      };
    default:
      return state;
  }
};

export default reducer;