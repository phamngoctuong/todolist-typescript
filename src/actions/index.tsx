import * as types from './../constants/ActionTypes';
export const updateStatus = (id: any) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  }
};
export const deleteTask = (id: any) => {
  return {
    type: types.DELETE_TASK,
    id
  }
};
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
export const filterTask = (keyword: string) => {
  return {
    type: types.FILTER,
    keyword
  }
};
export const sortTask = (payload: any) => {
  return {
    type: types.SORT,
    payload
  }
};
export const statusTask = (status: number) => {
  return {
    type: types.STATUS,
    status
  }
};