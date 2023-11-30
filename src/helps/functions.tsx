import { getItem } from "./localstorage";
var array = require('lodash/array');
export function findIndex(state: any, id: string): number {
  return array.findIndex(state, function (o: any) {
    return o?.id === id;
  });
}
export function sortTask(tasks: any, sort: any) {
  let items = getItem("tasks");
  var { name, number } = sort;
  switch (name) {
    case "name":
      items.sort(function (a: any, b: any) {
        if (a.name > b.name) return -number;
        if (a.name === b.name) return 0;
        if (a.name < b.name) return number;
        return items;
      })
      return items;
    case "status":
      items.sort(function (a: any, b: any) {
        if (a.status > b.status) return -number;
        if (a.status === b.status) return 0;
        if (a.status < b.status) return number;
        return items;
      });
      return items;
    default:
      return items;
  }
}