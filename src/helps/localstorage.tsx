import { sortTask } from "./functions";
const _ = require('lodash');
export function setItem(key: string = "tasks", state: any): void {
  localStorage.setItem(key, JSON.stringify(state));
};
export function getItem(key: string = "tasks"): any {
  return JSON.parse(localStorage.getItem(key) || "[]");
};
export function removeItem(key1: string = "tasks", key2: string = "id"): any {
  let items = getItem(key1);
  _.remove(items, function (item: any) {
    return item?.id === key2
  });
  setItem(key1, items);
  return items;
};
export function filterItem(key: string = "tasks", keyword: string): any {
  let items = getItem(key);
  var result = _.filter(items, function (item: any) {
    return item.name.toString().toLocaleLowerCase().includes(keyword.toString().toLocaleLowerCase())
  });
  return result;
};
export function filterStatusItem(key: string = "tasks", filterStatus: number): any {
  let items = getItem(key);
  var result = _.filter(items, function (item: any) {
    // eslint-disable-next-line eqeqeq
    if (filterStatus == -1) {
      return items;
    }
    // eslint-disable-next-line eqeqeq
    return item.status == filterStatus;
  });
  return result;
};
export function sortItem(sort: any): any {
  let tasks = sortTask("tasks", sort);
  return tasks;
};