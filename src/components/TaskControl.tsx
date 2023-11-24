import * as React from 'react';
import TaskControlSearch from './TaskControlSearch';
import TaskControlSort from './TaskControlSort';
interface IAppProps { [propName: string]: any }
interface IAppState {
}
class TaskControl extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, obj: IAppState) {
    super(props);
    this.state = {
    };
  }
  onSearch =  (keyword: string) => {
    return this.props.onSearch(keyword);
  };
  onClickSearch =  (keyword: string) => {
    return this.props.onClickSearch(keyword);
  };
  onSort = (name:string,value:string) => {
    return this.props.onSort(name,value);
  }
  public render() {
    return (
      <div className="row mt-15">
        <TaskControlSearch onClickSearch={(keyword: string) => this.onClickSearch(keyword)} />
        <TaskControlSort onSort={(name:string,value:string) => this.onSort(name,value)}/>
      </div>
    );
  }
}
export default TaskControl;