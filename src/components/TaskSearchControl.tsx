import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [key: string]: any;
}
class TaskSearchControl extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      keyword: null
    };
  }
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    })
  }
  public render() {
    var { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input name="keyword" type="text" className="form-control" placeholder="Nhập từ khóa..." onChange={this.onHandleChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={() => this.props.onSearch(keyword)}>
              <span className="fa fa-search mr-5" />Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}
export default TaskSearchControl;