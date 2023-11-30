import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [key: string]: any;
}
class TaskFilter extends React.Component<IAppProps, IAppState> {
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value: filterName } = event.currentTarget;
    this.props.onFilterChange(filterName);
  }
  public render() {
    return (
      <td>
        <input type="text" className="form-control" name="filterName" onChange={this.onHandleChange} />
      </td>
    );
  }
}
export default TaskFilter;