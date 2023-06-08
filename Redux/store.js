import { createStore } from "redux";
import { taskReducer } from "./reducer";

export const myStore = createStore(taskReducer);
