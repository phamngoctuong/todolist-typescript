import * as React from 'react';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
interface IAppProps { [propName: string]: any }
interface IAppState {
  task: {
    [key: string]: any;
  }
}
class TaskList extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      task: {},
    };
  }
  onDelete = (id: string) => {
    return this.props.onDelete(id);
  }
  onEdit = (task: any) => {
    return this.props.onEdit(task);
  }
  onFilter = (keyword: string) => {
    return this.props.onFilter(keyword);
  };
  onChangeStatus = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value: status } = event.target;
    return this.props.onChangeStatus(status);
  }
  public render() {
    var { tasks } = this.props;
    var tasksMap = tasks.map((task: IAppState, index: number) => <TaskItem onEdit={(taskE: any) => this.onEdit(taskE)} onDelete={(id: string) => this.onDelete(id)} key={index} index={index} task={task} />)
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover text-center">
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
                <TaskFilter onFilter={(keyword: string) => this.onFilter(keyword)} />
                <td>
                  <select className="form-control" name="filterStatus" onChange={this.onChangeStatus}>
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td />
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