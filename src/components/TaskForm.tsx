import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [propName: string]: any
}
class TaskForm extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      id: null,
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
  componentWillReceiveProps(nextProps: Readonly<IAppProps>, nextContext: any): void {
    if (nextProps && nextProps.taskedit) {
      this.setState({
        id: nextProps.taskedit.id,
        name: nextProps.taskedit.name,
        status: nextProps.taskedit.status
      });
    }
  }
  onSave = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault();
    var { id, name, status } = this.state;
    this.props.onSave({ id, name, status });
    this.setState({
      id: null,
      name: "",
      status: 0
    });
  };
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
            <form onSubmit={(e: any) => this.onSave(e)} >
              <div className="form-group">
                <label>Tên :</label>
                <input type="text" className="form-control" value={name} name="name" onChange={this.onHandleChange} />
              </div>
              <label>Trạng Thái :</label>
              <select className="form-control" name="status" value={status} onChange={this.onHandleChange}>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
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
export default TaskForm;