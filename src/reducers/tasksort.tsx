import * as types from "../constants/ActionTypes";
var initialState: any = {
  name: null,
  value: 1
}
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SORT:
      var { payload } = action;
      return payload;
    default:
      return state;
  }
}
export default myReducer;