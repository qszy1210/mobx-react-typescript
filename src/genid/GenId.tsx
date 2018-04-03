import * as React from 'react';

declare var require: any;
const shortid = require('shortid');

export interface GenIdProps {
}

export default class GenId extends React.Component<GenIdProps, any> {
  constructor() {
    super();
    this.state = {
      id: 0
    }
  }
  componentDidMount() {
    this.gen();
  }
  render() {
    return (
      <div>
        <button onClick={this.gen.bind(this)}>GenID</button>
        <div>{this.state.id}</div>
      </div>
    );
  }

  gen() {
    this.setState({id: shortid.generate()})
  }
}
