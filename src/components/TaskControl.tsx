import * as React from 'react';
import TaskSortControl from './TaskSortControl';
import TaskSearchControl from './TaskSearchControl';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskControl extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  public render() {
    var { sort } = this.props;
    return (
      <div className="row mt-15">
        <TaskSearchControl onSearch={(keyword: string) => this.props.onSearch(keyword)} />
        <TaskSortControl onSort={(sort: any) => this.props.onSort(sort)} sort={sort} />
      </div>
    );
  }
}
export default TaskControl;