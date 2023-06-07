import { createStore } from "redux";
import { Reducers, taskReducer } from "./reducer";

export const myStore = createStore(taskReducer);
