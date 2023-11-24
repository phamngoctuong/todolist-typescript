import * as React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';
interface IAppProps { [propName: string]: any }
interface IAppState {
  task?: {},
  tasks: any[];
}
interface Task {
  id?: string;
  name: string;
  status: number;
}
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('tasks') || "{}") || [],
      task: {
        name: "",
        status: 0
      }
    };
  }
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
  onSave = (task: Task) => {
    var array = require('lodash/array');
    var taskS = JSON.parse(localStorage.getItem('tasks') || "{}");
    if (task?.id) {
      var index = array.findIndex(taskS, { id: 1 });
      taskS.splice(index, 1, task);
      localStorage.setItem('tasks', JSON.stringify(taskS));
      this.setState({ tasks: taskS, task: task });
    } else {
      task.id = uuidv4();
      taskS.push(task);
      localStorage.setItem('tasks', JSON.stringify(taskS));
      this.setState({ tasks: taskS });
    }
  }
  onDelete = (id: string) => {
    var array = require('lodash/array');
    var taskS = JSON.parse(localStorage.getItem('tasks') || "{}");
    var tasks = array.remove(taskS, function (task: any) {
      return task.id !== id;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks });
  }
  onFilter = (keyword: string) => {
    var tasks = JSON.parse(localStorage.getItem('tasks') || "{}");
    var result = tasks.filter((task: any) => (`${task['name']}`.toLowerCase()).includes(keyword.toLowerCase()))
    this.setState({
      tasks: result
    });
  };
  onChangeStatus = (status: number) => {
    var tasks = JSON.parse(localStorage.getItem('tasks') || "{}");
    // eslint-disable-next-line eqeqeq
    if (status == -1) {
      this.setState({
        tasks: tasks
      });
    } else {
      // eslint-disable-next-line eqeqeq
      var result = tasks.filter((task: any) => task['status'] == status);
      this.setState({
        tasks: result
      });
    }
  }
  onClickSearch = (keyword: string) => {
    var tasks = JSON.parse(localStorage.getItem('tasks') || "{}");
    var result = tasks.filter((task: any) => (`${task['name']}`.toLowerCase()).includes(keyword.toLowerCase()))
    this.setState({
      tasks: result
    });
  };
  onSort = (name: string, value: any) => {
    var tasks = JSON.parse(localStorage.getItem('tasks') || "{}");
    var numb = parseInt(value);
    switch (name) {
      case "name":
        // eslint-disable-next-line array-callback-return
        tasks.sort((a: any, b: any) => {
          if (a.name < b.name) return - numb;
          // eslint-disable-next-line eqeqeq
          if (a.name == b.name) return 0;
          if (a.name > b.name) return numb;
        });
        this.setState({
          tasks: tasks
        });
        break;
      case "status":
        // eslint-disable-next-line array-callback-return
        tasks.sort((a: any, b: any) => {
          if (a.name < b.name) return - numb;
          // eslint-disable-next-line eqeqeq
          if (a.status == b.status) return 0;
          if (a.name > b.name) return numb;
        });
        this.setState({
          tasks: tasks
        });
        break;
    }
  }
  public render() {
    var { tasks, task } = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
        </div>
        <div className="row">
          <TaskForm onSubmit={(task: Task) => this.onSave(task)} task={task} />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary mr-5">
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-danger" onClick={this.generateData}>
              Generate Data
            </button>
            <TaskControl onSort={(name: string, value: string) => this.onSort(name, value)} onClickSearch={(keyword: string) => this.onClickSearch(keyword)} />
            <TaskList onChangeStatus={(status: number) => this.onChangeStatus(status)} onFilter={(keyword: string) => this.onFilter(keyword)} tasks={tasks} onEdit={(task: any) => this.onSave(task)} onDelete={(id: string) => this.onDelete(id)} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;