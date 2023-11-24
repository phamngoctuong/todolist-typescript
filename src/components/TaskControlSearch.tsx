import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  keyword: any;
}
class TaskControlSearch extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;
    this.setState({
      keyword: value
    });
  }
  onClickSearch = (e: React.FormEvent<HTMLButtonElement | any>) => {
    var { keyword } = this.state;
    return this.props.onClickSearch(keyword);
  };
  public render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input name="keyword" type="text" className="form-control" placeholder="Nhập từ khóa..." onChange={this.onHandleChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={this.onClickSearch}>
              <span className="fa fa-search mr-5" />Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}
export default TaskControlSearch;