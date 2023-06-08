import { ADD_TASK, REMOVE_TASK } from "./ActionTypes";
const initialState = [
  {
    id: 1,
    text: "User Research & Analysis",
  },
  {
    id: 2,
    text: "Black & White Wireframe",
  },
  {
    id: 3,
    text: "Design On Figma",
  },
];
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter((task) => task.id == action.payload);
    default:
      return state;
  }
};
