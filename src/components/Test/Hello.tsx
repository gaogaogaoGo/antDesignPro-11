import * as React from 'react';
export interface HelloProps {
  compiler: string;
  framework: string;

}

export default class Hello extends React.Component<HelloProps, {}> {
  state = {
    name: 0,
  };

  componentDidMount() {
  }

  render() {
    const { name } = this.state;
    return (
      <div>hello {this.props.compiler}-{this.props.framework}
      </div>
    )
  }

}