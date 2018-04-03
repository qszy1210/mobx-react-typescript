/**
 * 支付方式的一个card, 去对账, 经营情况都有, 所有整一个组件吧
 * added by zhangqs on 2018-02-01
 */

import * as React from 'react';
import "./PaymentMethodTypeCard.scss";

// import FontIcon from "../icons/FontIcon";

export interface PaymentMethodTypeCardProps {
   type: {
       iconName: string;
       label: string;
       count: number;
   },
   amount: number;
   className?: string;

   color?: string;
   width?: number; //block的宽度
   height?: number;//block的高度
}

export default class PaymentMethodTypeCard extends React.PureComponent<PaymentMethodTypeCardProps, any> {
  render() {
      const {type, amount, className, color, width, height} = this.props;
      const {iconName, label, count} = type || {} as any;
    return (
      <div className={`payment-card ${className||''}`} style={{borderColor: color, width, height}}>
          <div className="amount"><span>{amount}</span></div>
          <div className="type" style={{backgroundColor: color}}><span><span className="type-icon">{iconName}</span><span className="display">{`${label}(${count})`}</span></span></div>
      </div>
    );
  }
}
