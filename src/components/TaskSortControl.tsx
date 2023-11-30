/* eslint-disable eqeqeq */
import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskSortControl extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  public render() {
    var { sort: { name, number } } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp Xếp
            <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={(e: any) => { e.preventDefault(); return this.props.onSort({ name: "name", number: 1 }) }}>
              <a href="https://github.com" role="button" className={(name === "name" && number == 1) ? "sort_selected" : ""}>
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li onClick={(e: any) => { e.preventDefault(); return this.props.onSort({ name: "name", number: -1 }) }}>
              <a href="https://github.com" role="button" className={(name === "name" && number == -1) ? "sort_selected" : ""}>
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={(e: any) => { e.preventDefault(); return this.props.onSort({ name: "status", number: 1 }) }}>
              <a href="https://github.com" role="button" className={(name === "status" && number == 1) ? "sort_selected" : ""}>Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={(e: any) => { e.preventDefault(); return this.props.onSort({ name: "status", number: -1 }) }}>
              <a href="https://github.com" role="button" className={(name === "status" && number == -1) ? "sort_selected" : ""}>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default TaskSortControl;