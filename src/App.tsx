import * as React from 'react';
import './App.css';
import TaskContainer from './containers/TaskContainer';
import TaskFormContainer from './containers/TaskFormContainer';
import TaskControlContainer from './containers/TaskControlContainer';
interface IAppProps { [propName: string]: any }
class App extends React.Component<IAppProps> {
  generateData() {
    var tasks = [
      {
        id: 1,
        name: "Phòng khám số 1",
        status: 1
      },
      {
        id: 2,
        name: "Phòng khám số 2",
        status: 1
      },
      {
        id: 3,
        name: "Phòng khám số 3",
        status: 0
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  public render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
        </div>
        <div className="row">
          <TaskFormContainer />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary mr-5">
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-danger" onClick={this.generateData}>
              Generate Data
            </button>
            <TaskControlContainer />
            <TaskContainer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;