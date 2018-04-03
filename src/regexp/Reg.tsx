import * as React from 'react';

export interface RegProps {
}

export default class Reg extends React.Component<RegProps, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      testResult: "",
      inputValue: "",
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onChange.bind(this)}/> <span>{this.state.testResult}</span>
      </div>
    );
  }

  onChange(evt){
    this.setState({inputValue: evt.target.value, testResult: this.test(evt.target.value) + ""});
  }

  //6到12位
  test(value) {
    const regExp = /(?=^[^\u4E00-\u9FA5]{6,12}$)(?=^\S{6,12}$)(?=\d+[^0-9]+|([^0-9]+\d+))/;
    // const regExp = /^(?![^A-Za-z]+$)(?![^0-9]+$)[\x21-x7e]{6,12}$/;
    return regExp.test(value);
  }
}
