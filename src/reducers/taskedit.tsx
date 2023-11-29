import * as types from "../constants/ActionTypes";
var initialState = {
  id: "",
  name: "",
  status: 0
};
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.EDIT_TASK:
      var {task} = action;
      return task;
    default:
      return state;
  }
}
export default myReducer;