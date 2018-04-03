/**
 * block中的, 展示两行的一个小卡片区域
 */
import * as React from 'react';
import './TitleBlock.scss';
import {observable} from "mobx";
import {observer} from "mobx-react";
export interface TitleBlockProps {
    dates: string[],
    current: string,
    onClick: Function;
}

export default class TitleBlock extends React.Component<TitleBlockProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            current: ''
        }
    }
    componentDidMount() {
        const {current} = this.props;
        this.setState({current});
    }
  render() {
      const {dates} = this.props;
      const style = {
          display: 'table-cell',
          verticalAlign: 'middle',
      }

      return <div style={style} className={`summary-operation-date`}>{
          dates.map((date, index) => {
              if (date === this.state.current) {
                  return <Label key={index} label={date} selected onClick={this.onClick.bind(this, date)}></Label>
              }
              return <Label key={index} label={date} onClick={this.onClick.bind(this, date)}></Label>
          })
      }
      </div>
  }

  onClick(date: string) {
      const {onClick, current} = this.props;
      this.setState({current: date});
      typeof onClick === 'function' && onClick(date);
  }
}

interface LabelProps {
    label: string, selected?: boolean, onClick: Function
}
class Label extends React.PureComponent<LabelProps, any>{
    render() {
        const {label, selected} = this.props;
        const style = {
            display: "inline-block",
            width: "54px",
            height: "20px",
            lineHeight: "20px",
            fontSize: "12px",
            marginRight: "30px",
            borderRadius: "12px",
            textAlign: "center",
            // background: selected ? '#fce8d8' : 'transparent',
            cursor: 'pointer',
        };
        return <span style={style} className={`label ${selected?'selected':''}`} onClick={this.onClick.bind(this)}>{label}</span>

    }
    onClick() {
        const {onClick} = this.props;
        typeof onClick === 'function' && onClick();
    }
}


