import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [keyword: string]: any
}
class TaskfilterStatus extends React.Component<IAppProps, IAppState> {
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value: status } = event.currentTarget;
    this.props.statusTask(status);
  }
  public render() {
    return (
      <td>
        <select className="form-control" name="filterStatus" onChange={this.onHandleChange}>
          <option value={-1}>Tất Cả</option>
          <option value={0}>Ẩn</option>
          <option value={1}>Kích Hoạt</option>
        </select>
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
    statusTask: (status: number) => dispatch(actions.statusTask(status))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskfilterStatus);