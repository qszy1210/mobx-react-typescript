/**
* Created by zhangqs on 2017-11-06
* 轮播器基本组成
*/

import * as React from 'react';

export interface CarouselItemProps {
    src: string
    alt?: string
    link?: string
    style?: any
}

export default class CarouselItem extends React.PureComponent<CarouselItemProps, any> {
  render() {
    const {src, alt, link, style} = this.props;
    return (
      <div className="carousel-item" style={style}>
        <a href={link} target="_blank">
            <img src={src} alt={alt}/>
        </a>
      </div>
    );
  }
}
