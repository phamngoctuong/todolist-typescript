import * as types from "../constants/ActionTypes";
var initialState = {
  name: "name",
  status: -1
};
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SORT:
      var { sort } = action;
      return sort;
    default:
      return state;
  }
}
export default myReducer;