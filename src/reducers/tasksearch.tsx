import * as types from "../constants/ActionTypes";
var initialState:any = null;
const myReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SEARCH:
      var { keyword } = action;
      return keyword;
    case types.FILTER:
      keyword = action.keyword;
      return keyword;
    default:
      return state;
  }
}
export default myReducer;