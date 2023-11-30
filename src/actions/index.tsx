import * as types from './../constants/ActionTypes';
export const updateStatus = (id: any) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  }
}
export const deleteTask = (id: string) => {
  return {
    type: types.DELETE_TASK,
    id
  }
}
export const addTask = (task: any) => {
  return {
    type: types.ADD_TASK,
    task
  }
};
export const editTask = (task: any) => {
  return {
    type: types.EDIT_TASK,
    task
  }
};
export const searchTask = (keyword: string) => {
  return {
    type: types.SEARCH,
    keyword
  }
};
export const filterTask = (filterName: string) => {
  return {
    type: types.FILTER,
    filterName
  }
};
export const filterStatusTask = (filterStatus: string) => {
  return {
    type: types.FILTER_STATUS,
    filterStatus
  }
};
export const sortTask = (sort: any) => {
  return {
    type: types.SORT,
    sort
  }
};
