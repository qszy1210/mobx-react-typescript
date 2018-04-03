/**
 * block中的, 展示两行的一个小卡片区域
 */
import * as React from 'react';
import './SOBlockClauseCard.scss';

export interface SOBlockClauseCardProps {
  caret: {
    direction: 'left'|'right'
  },
  width?: number; //整体的长度
  height?: number;
  backgroundColor? : string;

  label: string | {label: string ,value: string};
  labelColor?: string,
  value: string;
  valueColor?: string,
  uom: string;

  jumpCallback?: Function,



}

export default class SOBlockClauseCard extends React.PureComponent<SOBlockClauseCardProps, any> {
  render() {
    const {caret, width, height, backgroundColor, label, value, uom, children, jumpCallback, labelColor, valueColor} = this.props;
    const style = {
        width: width + 'px',
        height: height + 'px',
        backgroundColor: backgroundColor,
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'table-cell',
    };
    let caretStyle = {};
    if (caret && caret.direction === 'right'){
        caretStyle = {
            borderLeftColor: backgroundColor,
            left: width + 'px',
            top: height/2 + 'px',
            marginTop: -height/8/2 + 'px',
            borderWidth: height/8 + 'px',
        }
    }
    else {
        caretStyle = {
            borderRightColor: '#fff',
            left: (width - height/4)  + 'px',
            top: height/2 + 'px',
            marginTop: -height/8/2 + 'px',
            borderWidth: height/8 + 'px',
        }
    }

      return (
          <div style={style} className="so-block-clause-card">
              <div className={jumpCallback?'home-link':''} onClick={this.onClick.bind(this)}><span style={{fontSize: "30px", color: valueColor}}>{value}</span>
                  <span style={{fontSize: '14px'}}>{uom}</span></div>
              <div style={{fontSize: '14px', color: labelColor}}>{typeof label === 'string' ? label : <span>{label.label} <span className={jumpCallback?'home-link':''} onClick={this.onClick.bind(this)}>({label.value})</span></span>}</div>
              {caret ? <div className={'caret'} style={caretStyle}></div> : null}
          </div>

    );


  }
    onClick(evt) {
      const {jumpCallback} = this.props;
      typeof jumpCallback && jumpCallback();
    }


}
