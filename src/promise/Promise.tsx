import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export interface PromiseProps {
}

export default class PromiseDiv extends React.Component<PromiseProps, any> {
  constructor() {
    super();
    this.state = {
      result1:1,
      result2: 2,
      result3: 3,
    }
  }
  render() {
    const {result1, result2, result3} = this.state;
    return (
      <div>
        <button onClick={this.click1.bind(this)}>click1</button>
        <button onClick={this.click2.bind(this)}>click2</button>
        <button onClick={this.click3.bind(this)}>click3</button>
        <span>{result1}</span>
        -
        <span>{result2}</span>
        -
        <span>{result3}</span>
      </div>
    );
  }

   async click1() {
    // setTimeout(() => {
    //   this.setState({
    //     result1: 'click1'
    //   })
    // }, 1000);

    // new Promise(function(res, rej){
    //   setTimeout(() => {
    //     res('success');
    //   }, 1000);
    // }).then(data=>{
    //   this.setState({
    //     result1: data
    //   })
    //   // return 'second';
    //   return new Promise(function(res, rej){
    //     res('second in promise');
    //   });
    // }).then(data=>{
    //   this.setState({
    //     result1: data
    //   })
    // }).catch(error=>{
    //   this.setState({
    //     result1: 'error'
    //   })
    // });

    // this.setState({
    //   result1: 'ok'
    // })
    // const data = await new Promise(function(res, rej){
    //   setTimeout(() => {
    //     res('success');
    //   }, 1000);
    // });

    // this.setState({result1: data});

    // this.setState({
    //   result1: 'ok'
    // })

    //macroTask
    setTimeout(() => {
      this.setState({result1: 'timeout1'})
    }, 1);
    setTimeout(() => {
      this.setState({result1: 'timeout0'})
    }, 0);

    //microTask
    this.ajax().then(data=>{
      this.setState({
        result1: 'ajax1'
      })
    });
    this.ajax().then(data=>{
      this.setState({
        result1: 'ajax2'
      })
    });

    //sync
    this.setState({
      result1: "1111"
    })
  }

  
  click2() {
    // this.requestData().then(data=>{

    // });
    this.setState({
      result2: 'click2'
    })
  }
  click3() {
    this.setState({
      result3: 'click3'
    })
  }

  // requestData(){
  //   return this.ajax().then(data=>{

  //   });
  // }


  async ajax() {

    const data = 'asdf';
    return data;
  }



}
