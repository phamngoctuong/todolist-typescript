import { combineReducers } from "redux";
import tasks from "./tasks";
import taskedit from "./taskedit";
import sort from "./sort";
const myReducer = combineReducers({
  tasks,
  taskedit,
  sort
});
export default myReducer;