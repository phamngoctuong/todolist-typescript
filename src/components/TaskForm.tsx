import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  task: {
    id?: string;
    name: string;
    status: number | string;
  }
}
class TaskForm extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      task: {
        name: "",
        status: 0
      }
    };
  }
  onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    var { task } = this.state;
    this.setState({
      task: {
        ...task,
        [name]: value
      }
    });
  }
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var { task } = this.state;
    return this.props.onSubmit(task);
  }
  UNSAFE_componentWillReceiveProps(nextProps: Readonly<IAppProps>, nextContext: any): void {
    if (nextProps) {
      var task = {
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      }
      this.setState({
        task: task
      });
    }
  }
  public render() {
    var { task } = this.state;
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
            <form onSubmit={(e) => this.onSubmit(e)}>
              <div className="form-group">
                <label>Tên :</label>
                <input type="text" className="form-control" name="name" onChange={this.onHandleChange} value={task.name} />
              </div>
              <label>Trạng Thái :</label>
              <select className="form-control" name="status" onChange={this.onHandleChange} value={(task.status === '1' || task.status === 1) ? 1 : 0}>
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