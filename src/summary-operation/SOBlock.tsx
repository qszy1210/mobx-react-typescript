import * as React from 'react';
import "./SOBlock.scss";

export interface SOBlockProps {

  title: {iconName: string, color: string, label: string}
  width?: number;
  height?: number;

}

export default class SOBlock extends React.Component<SOBlockProps, any> {
  render() {
    const {children, title, width, height} = this.props;
    const {iconName, color, label} = title;

    const style = {};
    width ? style['width'] = width : void 0;
    height ? style['height'] = height : void 0;
      return (
        <div className="so-block" style={style}>
          <div className="title">
            <span className="icon" style={{color}}>{iconName}</span>
            <span className="label">{label}</span>
          </div>
          <div className="content">
            {children}
          </div>
        </div>
      );
   
  }
}
