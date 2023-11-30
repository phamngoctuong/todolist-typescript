import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskItem extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  public render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            // eslint-disable-next-line eqeqeq
            className={this.props.task.status == 0 ? 'label label-danger' : 'label label-info'} onClick={() => this.props.updateStatus(task.id)}>{this.props.task.status == 1 ? 'Kích Hoạt' : 'Ẩn'}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning mr-5" onClick={() => this.props.editTask(task)}>
            <span className="fa fa-pencil" />Sửa
          </button>
          <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteTask(task.id)}>
            <span className="fa fa-trash" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;