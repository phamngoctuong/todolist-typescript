import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [keyword: string]: any
}
class TaskFilter extends React.Component<IAppProps, IAppState> {
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value: keyword } = event.currentTarget;
    this.props.filterTask(keyword);
  }
  public render() {
    return (
      <td>
        <input type="text" className="form-control" name="filterName" onChange={this.onHandleChange} />
      </td>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    filterTask: (keyword: any) => dispatch(actions.filterTask(keyword))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);