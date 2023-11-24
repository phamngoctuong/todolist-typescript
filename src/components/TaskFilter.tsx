import * as React from 'react';
interface IAppProps { [propName: string]: any }
interface IAppState {
  task: {
    [key: string]: any;
  }
}
class TaskFilter extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      task: {},
    };
  }
  onFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value: keyword } } = e;
    return this.props.onFilter(keyword);
  };
  public render() {
    return (
      <td>
        <input type="text" className="form-control" name="filterName" onChange={this.onFilter} />
      </td>
    );
  }
}
export default TaskFilter;