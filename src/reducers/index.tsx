import { combineReducers } from "redux";
import tasks from "./tasks";
import taskedit from "./taskedit";
import tasksearch from "./tasksearch";
import tasksort from "./tasksort";
import taskstatus from "./taskstatus";
const myReducer = combineReducers({
  tasks,
  taskedit,
  tasksearch,
  tasksort,
  taskstatus
});
export default myReducer;