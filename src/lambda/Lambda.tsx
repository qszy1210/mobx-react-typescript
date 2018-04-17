import * as React from 'react';

export interface LambdaProps {
  
}

interface ITest{
  ():void //就是表示一个方法的声明, 而且返回值是不确定的.
  name?: string;
}

export default class Lambda extends React.Component<LambdaProps, any> {
  render() {
    const a: ITest = ()=>{return 'abc'};
    return (
      <div>
        
      </div>
    );
  }
}
