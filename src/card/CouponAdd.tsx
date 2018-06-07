/**
 *   added by zhangqs on 2018-06-07
 *   优惠券新增dialog中的card
 **/

import * as React from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react";
// import Button from 'chanjet-nova-ui/dist/button/Button';
import {autobind} from 'core-decorators';

import './couponAdd.scss';

export interface CouponAddCardProps {
    type: string;//card 的类型
    title?: string;//card 的 title, 默认由type决定
    quantity?: number | ((cardType: string)=>Promise<number>);//数量, 接受数量或者一个异步方法
    desc?: string;//具体的 类型说明, 默认由 type 决定
    onClickBtn?: (cardType: string)=>void
}

@observer
@autobind
export default class CouponAddCard extends React.PureComponent<CouponAddCardProps, any> {

    @observable
    showAmount: number;

    render() {
        const {type, title, quantity, desc, onClickBtn} = this.props;
        let showTitle = "指定客户优惠券"
        let showDesc = "橱窗新客户，首次登录发放优惠券激励客户下单。建议发放某个爆品的折扣券，大一点的优惠力度更能促使客户动心"
        if (typeof quantity === "number") {
            this.showAmount = quantity;
        }
        else if (typeof quantity === "function") {
            const promise = quantity(type);
            promise.then(data=>{
                this.showAmount = data;
            })
        }
        return (
            <div className="coupon-add-card">
                <div className="coupon-add-card-header">
                    <span className="coupon-add-card-title">{title}</span>
                    <span className="coupon-add-card-title-detail">
                      发现
                      <span className="coupon-add-card-title-detail-amount">
                      {(!this.showAmount)?'--': this.showAmount}
                      </span>
                      家
                    </span>
                </div>
                <div className="coupon-add-card-body">
                    {showDesc}
                </div>
                <div className="coupon-add-card-footer">
                    <button className="coupon-add-card-footer-button"onClick={this.onClick}>click</button>
                </div>
            </div>
        );
    }

    onClick() {
        const {type} = this.props;
        console.log("alert");
    }
}

