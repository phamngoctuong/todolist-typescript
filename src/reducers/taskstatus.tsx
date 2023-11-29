import * as types from "../constants/ActionTypes";
var initialState: any = null;
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.STATUS:
      var { status } = action;
      return status;
    default:
      return state;
  }
}
export default myReducer;