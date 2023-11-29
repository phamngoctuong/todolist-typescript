import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [keyword: string]: any
}
class TaskSearchControl extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    })
  }
  onSearchTask = () => {
    var { keyword } = this.state;
    this.props.searchTask(keyword);
  }
  public render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input name="keyword" type="text" className="form-control" placeholder="Nhập từ khóa..." onChange={this.onHandleChange} />
          <span className="input-group-btn"><button className="btn btn-primary" type="button" onClick={() => this.onSearchTask()}> <span className="fa fa-search mr-5" />Tìm</button></span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    searchTask: (keyword: any) => dispatch(actions.searchTask(keyword))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskSearchControl);