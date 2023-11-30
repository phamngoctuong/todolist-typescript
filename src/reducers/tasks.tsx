import * as types from "../constants/ActionTypes";
import { findIndex } from "../helps/functions";
import { v4 as uuid4 } from "uuid";
import { getItem, setItem, removeItem, filterItem, filterStatusItem, sortItem } from "../helps/localstorage";
var data = JSON.parse(localStorage.getItem('tasks') || '{}');
var initialState = data ? data : [];
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.UPDATE_STATUS_TASK:
      var { id } = action;
      var index = findIndex(state, id);
      // eslint-disable-next-line eqeqeq
      state[index].status == 1 ? state[index].status = 0 : state[index].status = 1;
      setItem("tasks", state);
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      removeItem("tasks", id)
      var tasks = getItem("tasks");
      return [...tasks];
    case types.ADD_TASK:
      var { task } = action;
      if (!task.id) {
        task.id = uuid4();
        tasks = getItem("tasks");
        tasks.push(task);
        setItem("tasks", tasks);
      } else {
        tasks = getItem("tasks");
        index = findIndex(state, task.id);
        tasks[index] = task;
        setItem("tasks", tasks);
      }
      return tasks;
    case types.SEARCH:
      var { keyword } = action;
      tasks = getItem("tasks");
      tasks = filterItem("tasks", keyword);
      return tasks;
    case types.FILTER:
      var { filterName } = action;
      tasks = getItem("tasks");
      tasks = filterItem("tasks", filterName);
      return tasks;
    case types.FILTER_STATUS:
      var { filterStatus } = action;
      tasks = getItem("tasks");
      tasks = filterStatusItem("tasks", filterStatus);
      return tasks;
    case types.SORT:
      var { sort } = action;
      tasks = sortItem(sort);
      return tasks;
    default:
      return state;
  }
}
export default myReducer;