/* eslint-disable eqeqeq */
import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [key: string]: any;
}
class TaskForm extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: 0
    };
  }
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    })
  }
  onSave = (e: any) => {
    e.preventDefault();
    var { state } = this;
    this.setState({
      id: "",
      name: "",
      status: 0
    });
    this.props.addTask(state);
  }
  componentWillReceiveProps(nextProps: Readonly<IAppProps>, nextContext: any): void {
    if (nextProps && nextProps.taskedit) {
      this.setState({
        id: nextProps.taskedit.id,
        name: nextProps.taskedit.name,
        status: nextProps.taskedit.status
      });
    }
  }
  public render() {
    var { name, status } = this.state;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Thêm Công Việc
              <span className="fa fa-times-circle text-right" />
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={(e: any) => this.onSave(e)}>
              <div className="form-group">
                <label>Tên :</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onHandleChange} />
              </div>
              <label>Trạng Thái :</label>
              <select className="form-control" name="status" value={status == 1 ? 1 : 0} onChange={this.onHandleChange}>
                <option value={1}>Kích Hoạt</option>
                <option value={0}>Ẩn</option>
              </select><br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  <span className="fa fa-plus mr-5" />Lưu Lại
                </button>&nbsp;
                <button type="button" className="btn btn-danger">
                  <span className="fa fa-close mr-5" />Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
    addTask: (id: string) => dispatch(actions.addTask(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);