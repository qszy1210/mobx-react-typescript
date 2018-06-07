import * as React from 'react';

export interface TriangleProps {
}

interface triangleOpts {
  location?: string;//'top', 'bottom', 'left', 'right'
  color?: string;
  width?: number;
  height?: number;
  scale?: number;
  rotate?: string;
}

export default class Triangle extends React.Component<TriangleProps, any> {
  render() {
    return (
      <div>
        <img src={this.generateArrow({color: 'blue', width: 100, height: 500})} alt=""/>
      </div>
    );
  }

  //生成一个小三角, 采用 svg 的方式
generateArrow(opts:{
  location?: string;//'top', 'bottom', 'left', 'right'
  color?: string;
  width?: number;
  height?: number;
  scale?: number;
  rotate?: string;//'0', '180' ....
} = {} as any) {
  opts.location = opts.location || 'top';
  opts.color = opts.color || '#f04';
  opts.color = opts.color.replace('#', '%23');

  opts.width = opts.width || 36;
  opts.height = opts.width / 2;
  opts.scale = opts.width / 16;
  opts.rotate = '0';

  let { height, rotate, width } = opts;

  if (opts.location === 'bottom') {
    rotate = '180 8 4';
  }
  else if (opts.location === 'left') {
    height = opts.width;
    width = opts.height;
    rotate = '270 8 8';
  }
  else if (opts.location === 'right') {
    height = opts.width;
    width = opts.height;
    rotate = '90 4 4';
  }

  return `data:image/svg+xml,%3Csvg%20width%3D%22${width}%22%20height%3D%22${height}%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpolygon%20points%3D%220%2C%200%208%2C%208%2016%2C0%22%20fill%3D%22${opts.color}%22%20transform%3D%22scale%28${opts.scale}%29%20rotate%28${rotate}%29%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E`;
}
}
