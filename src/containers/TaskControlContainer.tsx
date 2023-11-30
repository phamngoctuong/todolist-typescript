import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import TaskControl from '../components/TaskControl';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskControlContainer extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  public render() {
    var { sort } = this.props;
    return (
      <TaskControl sort={sort} onSearch={(keyword: string) => this.props.onSearch(keyword)} onSort={(sort: any) => this.props.onSortTask(sort)}>
        {this.props.children}
      </TaskControl>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    sort: state.sort
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    onSearch: (keyword: string) => dispatch(actions.searchTask(keyword)),
    onSortTask: (sort: any) => dispatch(actions.sortTask(sort))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskControlContainer);