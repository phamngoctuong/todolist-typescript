import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import TaskList from '../components/TaskList';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskContainer extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  updateStatus = () => {
    this.props.updateStatus(this.props.task.id)
  }
  public render() {
    var { tasks } = this.props;
    return (
      <TaskList onFilterStatusChange={(filterStatus: number) => this.props.onFilterStatusChange(filterStatus)} onFilterChange={(filterName: string) => this.props.onFilterTask(filterName)} tasks={tasks} editTask={(task: any) => this.props.editTask(task)} updateStatus={(id: string) => this.props.updateStatus(id)} onDeleteTask={(id: string) => this.props.onDeleteTask(id)}>
        {this.props.children}
      </TaskList>
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
    updateStatus: (id: string) => dispatch(actions.updateStatus(id)),
    onDeleteTask: (id: string) => dispatch(actions.deleteTask(id)),
    editTask: (task: any) => dispatch(actions.editTask(task)),
    onFilterTask: (filterName: string) => dispatch(actions.filterTask(filterName)),
    onFilterStatusChange: (task: any) => dispatch(actions.filterStatusTask(task)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);