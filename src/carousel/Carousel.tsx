/**
* Created by zhangqs on 2017-11-06
* 轮播器组件
*/

import * as React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';
import CarouselCaret from './CarouselCaret';
import CarouselThumb from "./CarouselThumb";

export interface CarouselProps {
    items: {src: string, alt?: string}[], //图片信息
    speed?: number, //每张图片切换时间
    delay?: number, //切换时候延迟时间
    isPauseWhenHover?: boolean,//hover是否自动停止
    autoPlay?: boolean, //是否自动轮播, changed~
    showCaret?: boolean, //是否显示标志
    caretProcessing?: boolean; //caret是否显示进度
    isShowArrows?: boolean //是否显示箭头, 左右两边的切换按钮 TODO
    isInFinite?: boolean;//是否无限轮播 TODO

    width?: number; //宽度
    height?: number; //高度
    showThumb?: boolean;//是否显示缩略图
    thumbProps?: { //缩略图的具体属性

    }

    changeCallback?: (any)=>void;//轮播器变化的时候, 外部的回调, 参数为具体的index
}

export default class Carousel extends React.Component<CarouselProps, any> {
    constructor(props, context) {
        super(props, context)
        this.state = {
            cur: 0
        }
    }
  render() {
      const {items = [], autoPlay, speed, showCaret, width, height, showThumb, isShowArrows} = this.props;
      const containerStyle = {
          width: items.length * 100 + "%",
          left: "-" + (this.state.cur * 100) + "%",
          //transitionDuration: speed || 300
      };
      const wrapperStyle = {
          width,
          height,
      };
      const itemStyle = {
          width,
          height: showThumb? height-50 : height,
      };
    return (
        <div className="carousel" style={wrapperStyle}>
            <div className="carousel-container" style={containerStyle} onMouseOver={this.stop.bind(this)} onMouseOut={this.play.bind(this)}>
                {
                    items.map((item, index) => {
                        item["width"] = (100 / items.length) + "%";
                        item['style'] = itemStyle;
                        return <CarouselItem {...item} key={index}/>
                    })
                }
            </div>
            {isShowArrows?
                <div>
                    <span className="left-arrow" onClick={()=>this.next(-1)}>&lt;</span>
                    <span className="right-arrow" onClick={()=>this.next(1)}>&gt;</span>
                </div>
                :null}
            {showCaret && !showThumb ?
                <CarouselCaret count={items.length}
                               caretProcessing={this.props.caretProcessing}
                               onClick={this.clickCaret.bind(this)}
                               cur={this.state.cur}/>
                : null
            }
            {
                showThumb ? <CarouselThumb {
                                               ...{
                                                   items,
                                                   cur: this.state.cur,
                                                   onClick: this.clickCaret.bind(this)
                                               }
                                           } /> : null
            }


        </div>
    );
  }

  intervalHandler: any;

  componentDidMount() {
    this.play();
  }

  play() {
      if (this.props.autoPlay) {
          this.intervalHandler = window.setTimeout(() => {
              this.next(1);
              this.play();
          }, this.props.delay || 6000);
      }
  }

  stop() {
    this.intervalHandler && window.clearTimeout(this.intervalHandler);
  }

  next(step: number) {
    this.change(this.state.cur + step);
  }

  clickCaret(index: number) {
      this.change(index);
  }

  private change(index: number) {
    const { items = [], changeCallback } = this.props;
    const total = items.length || 1;
    while(index < 0) {
        index = index + total;
    }
    this.setState({
        cur:index % total
    });

    typeof changeCallback === 'function' && changeCallback(this.state.cur);
  }

  componentWillUnmount() {
    this.stop();
  }
}
