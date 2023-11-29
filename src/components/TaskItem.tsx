/* eslint-disable eqeqeq */
import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskItem extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  updateStatus = () => {
    this.props.updateStatus(this.props.task.id)
  }
  onDeleteTask = (id: string) => {
    this.props.deleteTask(id);
  };
  onEditTask = (task: any) => {
    this.props.editTask(task);
  }
  public render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={this.props.task.status == 1 ? 'label label-info' : 'label label-danger'} onClick={this.updateStatus}>
            {this.props.task.status == 1 ? 'Kích Hoạt' : 'Ẩn'}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning mr-5" onClick={() => this.onEditTask(task)}>
            <span className="fa fa-pencil" />Sửa
          </button>
          <button type="button" className="btn btn-danger" onClick={() => this.onDeleteTask(task.id)}>
            <span className="fa fa-trash" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    updateStatus: (id: any) => dispatch(actions.updateStatus(id)),
    deleteTask: (id: string) => dispatch(actions.deleteTask(id)),
    editTask: (task: any) => dispatch(actions.editTask(task))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);