import * as React from 'react';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import TaskFilterStatus from './TaskFilterStatus';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [key: string]: any;
}
class TaskList extends React.Component<IAppProps, IAppState> {
  public render() {
    var { tasks } = this.props;
    var tasksMap = tasks.length ? tasks?.map((task: IAppState, index: number) => <TaskItem editTask={(task: any) => this.props.editTask(task)} updateStatus={(id: string) => this.props.updateStatus(id)} onDeleteTask={(id: string) => this.props.onDeleteTask(id)} key={index} index={index} task={task} />) : [];
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <TaskFilter onFilterChange={(filterName: string) => this.props.onFilterChange(filterName)} />
                <TaskFilterStatus onFilterStatusChange={(filterStatus: number) => this.props.onFilterStatusChange(filterStatus)} />
              </tr>
              {tasksMap}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TaskList;