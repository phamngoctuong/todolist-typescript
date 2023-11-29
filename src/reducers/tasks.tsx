import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from 'uuid';
var data = JSON.parse(localStorage.getItem('tasks') || '{}');
var initialState = data ? data : [];
const myReducer = (state = initialState, action: any) => {
  var array = require('lodash/array');
  var tasks = JSON.parse(localStorage.getItem('tasks') || "{}");
  switch (action.type) {
    case types.UPDATE_STATUS_TASK:
      var { id } = action;
      var index = array.findIndex(state, function (o: any) {
        return o.id === id;
      });
      state[index].status === 1 ? state[index].status = 0 : state[index].status = 1;
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      array.remove(tasks, function (n: any) {
        return n.id === id;
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return [...tasks];
    case types.ADD_TASK:
      var { task } = action;
      if (task.id === "") {
        task.id = uuidv4();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        id = task.id;
        index = array.findIndex(state, function (o: any) {
          return o.id === id;
        });
        tasks[index] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      return [...tasks];
    default:
      return state;
  }
}
export default myReducer;