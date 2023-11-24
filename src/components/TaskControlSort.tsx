import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  name: string;
  value: number;
}
class TaskControlSort extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: "name",
      value: 1
    };
  }
  onSort = (e: any, name: string, value: number) => {
    e.preventDefault();
    this.setState({
      name: name,
      value: value
    })
    return this.props.onSort(name, value);
  };
  public render() {
    var { name, value } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp Xếp
            <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={(e: any) => this.onSort(e, "name", 1)}>
              <a href="https://github.com" role="button" className={(name === "name" && value === 1) ? "sort_selected" : ""}>
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li onClick={(e: any) => this.onSort(e, "name", -1)}>
              <a href="https://github.com" role="button" className={(name === "name" && value === -1) ? "sort_selected" : ""}>
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={(e: any) => this.onSort(e, "status", 1)}>
              <a href="https://github.com" role="button" className={(name === "status" && value === 1) ? "sort_selected" : ""}>Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={(e: any) => this.onSort(e, "status", -1)}>
              <a href="https://github.com" role="button" className={(name === "status" && value === -1) ? "sort_selected" : ""}>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default TaskControlSort;