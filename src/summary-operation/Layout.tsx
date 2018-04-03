import * as React from 'react';
import './Layout.scss';
import TitleBlock from "./TitleBlock";
import SOBlock from "./SOBlock";
import SOBlockClauseCard from "./SOBlockClauseCard";
import SOBlockClauseItem from "./SOBlockClauseItem";
import {TwoLines} from "./SOItems";
import PaymentMethodTypeCard from "./PaymentMethodTypeCard";
import {colorList} from "./SOConstant";
import ProcessUnit from "./ProcessUnit";

export interface SOProps {
}

export default class SO extends React.Component<SOProps, any> {
    render() {
        return <div className="summary-operation">
            <div className="summary-operation-wrapper">
                <div className="row title">
                    <div className="cell">
                        {this.renderTitle()}
                    </div>
                </div>
                <div className="row content">
                    <div className="cell left">
                        <div className="info">
                            {this.renderSalesInfo()}
                        </div>
                        <div className="money-product">
                            <div className="cell">
                                {this.renderBalanceInfo()}
                            </div>
                            <div className="cell">
                                {this.renderNotBalanceInfo()}
                            </div>
                        </div>
                        <div className="payment">
                            {this.renderPaymentARInfo()}
                        </div>
                    </div>
                    <div className="cell right">
                        <div className="recent">
                            {this.renderRencent()}
                        </div>
                        <div className="goods-receipt">
                            {this.renderGoodsReceipt()}
                        </div>
                        <div className="payment">
                            {this.renderPaymentAp()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    //销售信息
    renderSalesInfo() {
        return <SOBlock {
                            ...{
                                title: {
                                    iconName: "icon",
                                    color: '#fff',
                                    label: "销售情况1"
                                }
                            }
                        } >
            {
                this.renderSalesInfoBlockContent()
            }
        </SOBlock>
    }

    renderSalesInfoBlockContent() {
        return <div className="so-block-content">
            <SOBlockClauseItem
                {
                    ...{
                        className: 'so-block-content-item-complex',
                        // width: 602,
                        height: 70,
                        backgroundColor: '#fff',
                        card: {
                            caret: {
                                direction: 'left'
                            },
                            width: 124,
                            height: 70,
                            backgroundColor: '#fff',
                            label: '销售情况',
                            value: '4.22',
                            uom: '万'
                        }
                    }
                }
            >
                    <TwoLines {
                                  ...{
                                      iconName: "icon",
                                      items: [
                                          {label: "首客", value: {amount: "999.54万", count: "10家"}},
                                          {label: "客单价", value: '9999.00元'},
                                      ]
                                  }
                              } />
                    <TwoLines {
                                  ...{
                                      iconName: "icon",
                                      items: [
                                          {label: "首客", value: {amount: "999.99万", count: "10家"}},
                                          {label: "客单价", value: '9999.00元'},
                                      ]
                                  }
                              } />
            </SOBlockClauseItem>
            <div className="vertical-line"/>
            <div className="info-right">
                <SOBlockClauseCard
                    {
                        ...{
                            caret: {
                                direction: 'left'
                            },
                            width: 124,
                            height: 70,
                            backgroundColor: '#fff',
                            label: {label: '退货金额', value: "9笔"},
                            value: '0.89',
                            uom: '万',
                            jumpCallback: ()=>console.log('jump'),
                            labelColor: "#0f0",
                            valueColor: "#f00",
                        }
                    }
                />
            </div>
        </div>
    }

    //货物和钱的关系(两清)
    renderBalanceInfo() {
        return <SOBlock {
                            ...{
                                title: {
                                    iconName: "icon",
                                    color: '#fff',
                                    label: "钱货两清"
                                }
                            }
                        } >
            <div className="so-block-content">
                <SOBlockClauseItem
                    {
                        ...{
                            className: 'so-block-content-item',
                            // width: 602,
                            height: 88,
                            backgroundColor: '#fafafa',
                            card: {
                                caret: {
                                    direction: 'left'
                                },
                                width: 124,
                                height: 88,
                                backgroundColor: '#fff',
                                label: '销售情况',
                                value: '4.22',
                                uom: '万'
                            }
                        }
                    }
                >
                        <div className="balance-item weak">今日两清单据 <span className="strengthen">99笔</span></div>
                        <div className="balance-item">
                            <div><span className="weak">以往单据两清</span> <span className="strengthen">99笔</span></div>
                            <div className="balance-item-detail weak" style={{fontSize: "12px", whiteSpace: "nowrap"}}>
                                (其中: 补发货 <span className="strengthen">99笔</span>, 补齐欠款 <span  className="strengthen">99笔</span>, 钱货同清 <span className="strengthen">99笔</span>)</div>
                        </div>
                </SOBlockClauseItem>
            </div>
        </SOBlock>
    }

    //货物和钱的关系(未清)
    renderNotBalanceInfo() {
        return <SOBlock {
                     ...{
                         title: {
                             iconName: "icon",
                             color: '#fff',
                             label: "销售情况"
                         }
                     }
                 } >
            <div className="so-block-content">
                <SOBlockClauseItem
                    {
                        ...{
                            className: 'so-block-content-item',
                            // width: 602,
                            height: 88,
                            backgroundColor: '#fafafa',
                            card: {
                                caret: {
                                    direction: 'left'
                                },
                                width: 124,
                                height: 88,
                                backgroundColor: '#fff',
                                label: '销售情况',
                                value: '4.22',
                                uom: '万'
                            }
                        }
                    }
                >

                    <div className="not-balance-item">
                        <div><span className="weak">未收款,已出库</span> <span className="strengthen">10笔</span></div>
                        <div><span className="weak">已收款,未出库</span> <span className="strengthen">8笔</span></div>
                        <div><span className="weak">未收款,未出库</span> <span className="strengthen">7笔</span></div>
                    </div>
                </SOBlockClauseItem>
            </div>
        </SOBlock>
    }

    //收款情况
    renderPaymentARInfo(){
        return <SOBlock {
                            ...{
                                title: {
                                    iconName: "icon",
                                    color: '#fff',
                                    label: "收款情况"
                                }
                            }
                        } >
            <div>
                {this.renderPaymentARContent()}
            </div>
        </SOBlock>
    }
    //渲染title
    renderTitle() {
        return (
            <div>
                <TitleBlock {
                                ...{
                                    dates: ["今日", "昨日", "本月", "本年"],
                                    current: "今日",
                                    onClick: (data) => {
                                        console.log(`${data}`);
                                    }
                                }
                            }/>

                <div className="check-flow">
                    查看经营情况
                </div>
            </div>
        )


    }

    //收款情况具体内容
    renderPaymentARContent() {
        return <div className="so-block-content" style={{marginTop: "10px"}}>
            <SOBlockClauseItem
                {
                    ...{
                        className: 'so-block-content-item-complex',
                        // width: 602,
                        height: 70,
                        backgroundColor: '#fff',
                        card: {
                            caret: {
                                direction: 'left'
                            },
                            width: 124,
                            height: 70,
                            backgroundColor: '#fff',
                            label: '收款(13笔)',
                            value: '8.2',
                            uom: '万'
                        }
                    }
                }
            >
                <div className="process-unit-wrapper">
                    <ProcessUnit
                        {
                            ...{
                                label: "收预收款",
                                count: 44,
                                amount: 99.99,
                                uom: "万",
                                done: 80,
                                total: 100,
                                className: 'process-unit',
                            }
                        }
                    />
                    <ProcessUnit
                        {
                            ...{
                                label: "收现结款",
                                count: 99,
                                amount: 99.99,
                                uom: "万",
                                done: 80,
                                total: 100,
                                className: 'process-unit',
                            }
                        }
                    />
                    <ProcessUnit
                        {
                            ...{
                                label: "欠款收回",
                                count: 99,
                                amount: 99.99,
                                uom: "万",
                                done: 80,
                                total: 100,
                                className: 'process-unit',
                            }
                        }
                    />
                </div>
            </SOBlockClauseItem>
            {this.renderPaymentList()}
        </div>
    }

    private renderPaymentList() {
        return <div className="payment-card-wrapper">
            <div className="payment-card-list-title">单位(元)</div>
            <div className="payment-card-list">
                {
                    colorList.map(color => {
                        return <PaymentMethodTypeCard
                            {
                                ... {
                                    type: {
                                        iconName: 'icon',
                                        label: "label",
                                        count: 23
                                    },
                                    amount: 123,
                                    color
                                }
                            } />
                    })
                }
            </div>
        </div>;
    }

//渲染近30天销售情况
    renderRencent() {
        return <SOBlock {
                     ...{
                         title: {
                             iconName: "icon",
                             color: '#fff',
                             label: "销售情况"
                         }
                     }
                 } >
            <div>
                echart here
            </div>
        </SOBlock>
    }

    //渲染进货请
    renderGoodsReceipt() {
        return <SOBlock {
                            ...{
                                title: {
                                    iconName: "icon",
                                    color: '#fff',
                                    label: "进货情况"
                                }
                            }
                        } >
            <div className="so-simple-block">
                <div><span className={'so-simple-block-label'}>进货笔数:</span><span className={'so-simple-block-value'}>99笔</span></div>
                <div><span className={'so-simple-block-label'}>进货金额:</span><span className={'so-simple-block-value'}>999万</span></div>
            </div>
        </SOBlock>
    }

    //渲染付款情况
    renderPaymentAp() {
        return <SOBlock {
                            ...{
                                title: {
                                    iconName: "icon",
                                    color: '#fff',
                                    label: "付款情况"
                                }
                            }
                        } >
            <div className="so-simple-block">
                <div><span className={'so-simple-block-label'}>付款笔数:</span><span className={'so-simple-block-value'}>12笔</span></div>
                <div><span className={'so-simple-block-label'}>付款金额:</span><span className={'so-simple-block-value'}>999万</span></div>
            </div>
        </SOBlock>
    }
}
