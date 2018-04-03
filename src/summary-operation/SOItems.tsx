//经营情况的一些 Item 小组件
import * as React from 'react';

export const TwoLines = (props: {iconName: string, items: {label: string, value: string | {amount: string, count: string}}[]}) => {
    const {iconName, items} = props;
    const wrapperStyle = {
        width: "240px",
        height: "70px",
        display: "table-cell",
        verticalAlign: "middle",

    };
    const itemLeftStyle = {
        display: "inline-block",
        width: "118px",
        textAlign: "right",
    };
    const iconStyle = {
        marginRight: "10px"
    };
    const itemRightStyle = {
        display: "inline-block",
        width: "auto",
        textAlign: "left",
        marginLeft: "14px",
    };

    return <div style={wrapperStyle}>
        {items.map((item, index) => {
            if (index === 0) {
                return <div key={index}>
                    <span style={itemLeftStyle}><span style={iconStyle}>{iconName}</span>{item.label}({typeof item.value === 'object' && item.value.count})</span>
                    <span style={itemRightStyle}>{typeof item.value === 'object' && item.value.amount}</span></div>
            }
            return <div key={index}><span style={itemLeftStyle}>{item.label}</span>
                <span style={itemRightStyle}>{item.value}</span></div>
        })}
    </div>
};