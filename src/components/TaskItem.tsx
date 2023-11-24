import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskItem extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
    };
  }
  onDelete = (id:string) => {
    return this.props.onDelete(id);
  }
  onEdit = (task:any) => {
    return this.props.onEdit(task);
  };
  public render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          {(task.status === 1 || task.status === '1') ? <span className="label label-success">Kích Hoạt</span> : <span className="label label-danger">Ẩn</span>}
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning mr-5" onClick={() => this.onEdit(task)}>
            <span className="fa fa-pencil" />Sửa
          </button>
          <button type="button" className="btn btn-danger" onClick={() => this.onDelete(task.id)}>
            <span className="fa fa-trash" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;