import * as React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import TaskFilter from './TaskFilter';
import TaskfilterStatus from './TaskfilterStatus';
interface IAppProps { [propName: string]: any }
interface IAppState {
  [key: string]: any;
}
class TaskList extends React.Component<IAppProps> {
  public render() {
    var { tasks, tasksearch, tasksort, status } = this.props;
    var _ = require('lodash');
    if (tasksearch) {
      tasks = _.filter(tasks, function (o: any) {
        return o.name.toLowerCase().includes(tasksearch.toString().toLowerCase());
      });
    }
    if (tasksort.name) {
      if (tasksort.name === "name") {
        tasks.sort((a: any, b: any): any => {
          if (a.name < b.name) return - tasksort.value;
          if (a.name === b.name) return 0;
          if (a.name > b.name) return tasksort.value;
          return tasks;
        });
      }
      if (tasksort.name === "status") {
        tasks.sort((a: any, b: any): any => {
          if (a.status < b.status) return - tasksort.value;
          if (a.status === b.status) return 0;
          if (a.status > b.status) return - tasksort.value;
          return tasks;
        });
      }
    }
    if (status) {
      tasks = _.filter(tasks, function (o: any) {
        // eslint-disable-next-line eqeqeq
        if (status != -1) {
          // eslint-disable-next-line eqeqeq
          return o.status == status;
        }
        return true;
      });
    }
    var tasksMap = tasks.map((task: IAppState, index: number) => <TaskItem key={index} index={index} task={task} />)
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <TaskFilter />
                <TaskfilterStatus />
                <td />
              </tr>
              {tasksMap}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    tasksearch: state.tasksearch,
    tasksort: state.tasksort,
    status: state.taskstatus
  }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);