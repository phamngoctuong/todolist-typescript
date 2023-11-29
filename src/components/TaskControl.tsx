import * as React from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';
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
    return (
      <div className="row mt-15">
        <TaskSearchControl />
        <TaskSortControl />
      </div>
    );
  }
}
export default TaskControl;