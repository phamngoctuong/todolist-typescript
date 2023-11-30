import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [key: string]: any;
}
class TaskFilterStatus extends React.Component<IAppProps, IAppState> {
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value: filterStatus } = event.currentTarget;
    this.props.onFilterStatusChange(filterStatus);
  }
  public render() {
    return (
      <td>
        <select className="form-control" name="filterStatus" onChange={this.onHandleChange} >
          <option value={-1}>Tất Cả</option>
          <option value={0}>Ẩn</option>
          <option value={1}>Kích Hoạt</option>
        </select>
      </td>
    );
  }
}
export default TaskFilterStatus;