import * as React from 'react';
import { Base } from './Base';

export interface ExtendTestProps {
}

export default class ExtendTest extends React.Component<ExtendTestProps, any> {

  public render() {
    this.test();
    return (
      <div>

      </div>
    );
  }

  test() {
    const child = new Base();
    child.call();

    console.log(`qs: =--------`);
    // const base = new Base();
    // base.call();
  }
}
