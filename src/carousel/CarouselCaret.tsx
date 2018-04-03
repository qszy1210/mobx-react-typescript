/**
* Created by zhangqs on 2017-11-06
* 轮播器游标
*/

import * as React from 'react';

export interface CarouselCaretProps {
    count: number
    style?: any
    onClick: (index: number)=>void;
    cur: number;
    caretProcessing?:boolean;
    interval?: number;//毫米数, 如果不传递的话, 那么默认1000
    // reset?: boolean;//是否重新开始
}

export default class CarouselCaret extends React.PureComponent<CarouselCaretProps, any> {
    constructor() {
        super();
        this.state={
            cur: 0,
            processPercent: 0,
        }
    }
    caretInterval;
    render() {
        const { count, cur } = this.props;
        this.setState({
            cur
        });
        const carets = [];
        for (let i = 0; i < count; i++) {
            carets.push(this.renderCaret(i, i === this.state.cur));
        }

        return (
            <div className={`carousel-caret`}>
                {carets}
            </div>
        );
    }
    componentDidMount() {
        const {caretProcessing} = this.props;
        if (caretProcessing) {
            //this.play();
        }
    }

    componentWillReceiveProps(nextProps){
        // const {reset} = nextProps;
        // if (reset) {
        //     this.setState({
        //         processPercent: 0
        //     });
        //     this.play();
        // }
    }

    play() {
        const {interval = 1000 } = this.props;
        this.caretInterval = setTimeout(()=>{
            this.setState({
                processPercent: this.state.processPercent + 5
            } );
            if (this.state.processPercent >=100 ) {
                this.stop();
            }
            else {
                this.play();
            }
        }, interval/20)
    }
    stop() {
        this.caretInterval && window.clearInterval(this.caretInterval);
    }
    start() {
        this.play();
    }

    reset() {
        this.setState({
            processPercent: 0
        });
        this.play();
    }

    componentWillUnmount() {
        this.stop();
    }

    renderCaret(index: number, isSelect: boolean) {
        const { style, caretProcessing, interval } = this.props;
        return (
            caretProcessing?
                <span  key={index} style={style} className={`${isSelect ? "cur item" : "item"} processing`} onClick={this.clickCaret.bind(this, index)}>
                    <span className="processing-inner" style={{width: this.state.processPercent + '%'}}/>
                </span>
                :
            <span key={index} style={style} className={`${isSelect ? "cur item" : "item"}`} onClick={this.clickCaret.bind(this, index)}/>
        );
    }

    clickCaret(index) {
        const { onClick } = this.props;
        onClick && onClick(index);
        // this.reset();
    }


}

