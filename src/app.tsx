import * as React from "react"
import * as ReactDOM from 'react-dom'
import Models from "./stores/Items"
// import Container from "./components/Container"
import Test from "./ajax/Test";
// import BusinessCondition from "./components/BusinessCondition";

// import Items from "./stores/Items"
//
// import {observable,autorun,reaction} from "mobx"
import ChanjetSelect, { SelectItem } from './select/BookSelect';
import { Items } from './select/BookSelect';
import BookSelect from './select/BookSelect';
import TestComponent from './TestComponent';


let store = new Models([
    {src: "1.jpeg",id:1},
    {src: "2.jpeg",id:2},
    {src: "3.jpeg",id:3},
    {src: "4.jpeg",id:4},
    {src: "5.jpeg",id:5}
]);


//泛型研究
// let outerFun:<T>(arg:T)=>T = Items.pushArg;//
// console.log(outerFun);

//let arrowFun = {<T>(arg:T):T}=>arg;
//let arrowFun = function<T>(arg:T):T{return arg};

// ReactDOM.render(<Layout/>, document.getElementById("root"))
// ReactDOM.render(<Test/>, document.getElementById("root"));
// ReactDOM.render(<ChanjetSelect/>, document.getElementById("root"));


// ReactDOM.render(<SelectItem {...{label: "企业12321123123123123123safas", desc: "123123123123123safas asfdas ads ", width: "245px"}}/>, document.getElementById("root"));
// ReactDOM.render(<Items/>, document.getElementById("root"));

//select选择器
// ReactDOM.render(<BookSelect/>, document.getElementById("root"));

//regexp
ReactDOM.render(<TestComponent/>, document.getElementById("root"));

//官网demo，但是不能运行
// class BeeKeeper {
//     hasMask: boolean;
// }
//
// class ZooKeeper {
//     nametag: string;
// }
//
// class Animal {
//     numLegs: number;
// }
//
// class Bee extends Animal {
//     keeper: BeeKeeper;
// }
//
// class Lion extends Animal {
//     keeper: ZooKeeper;
// }
//
// function findKeeper<A extends Animal, K> (a: {new(): A;
//     prototype: {keeper: K}}): K {
//
//     return a.prototype.keeper;
// }
//
// findKeeper(Lion)["nametag"];  // typechecks!


