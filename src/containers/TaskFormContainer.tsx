import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TaskForm from '../components/TaskForm';
interface IAppProps { [propName: string]: any }
class TaskFormContainer extends React.Component<IAppProps> {
  updateStatus = () => {
    this.props.updateStatus(this.props.task.id)
  }
  public render() {
    return (
      <TaskForm onSave={(task: any) => this.props.onSave(task)} taskedit={this.props.taskedit} />
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    taskedit: state.taskedit
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    onSave: (task: any) => dispatch(actions.addTask(task))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);