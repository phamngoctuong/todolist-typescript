import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskSortControl extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  onSortTask = (e:any,task: any) => {
    e.preventDefault();
    this.props.sortTask(task);
  };
  public render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp Xếp
            <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={(e:any) => this.onSortTask(e,{ name: "name", value: 1 })}>
              <a href="https://github.com" role="button" className="sort_selected">
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li onClick={(e:any) => this.onSortTask(e,{ name: "name", value: -1 })}>
              <a href="https://github.com" role="button">
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={(e:any) => this.onSortTask(e,{ name: "status", value: 1 })}>
              <a href="https://github.com" role="button">Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={(e:any) => this.onSortTask(e,{ name: "status", value: -1 })}>
              <a href="https://github.com" role="button">Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    tasksearch: state.tasksearch
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    sortTask: (payload: any) => dispatch(actions.sortTask(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);