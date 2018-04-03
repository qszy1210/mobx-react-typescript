//经营情况表有多个blockitem的情况
//包括左边的card 以及右边的content 区域

import * as React from 'react';
import SOBlockClauseCard, {SOBlockClauseCardProps} from "./SOBlockClauseCard";

export interface SOBlockClauseItemProps{
    width?: number;
    height?: number;
    backgroundColor?: string;
    card: SOBlockClauseCardProps,
    className?: string
}
export  default class SOBlockClauseItem extends React.Component<SOBlockClauseItemProps, any> {
    render() {
        const {width, height, backgroundColor, children, card, className} = this.props;
        const style = {
            width: width,
            height: height,
            backgroundColor: backgroundColor ? backgroundColor : '#fff',
            // float: 'right',
        };
        return (
            <div style={style} className={className}>
                <div style={{borderCollapse: 'collapse', float: 'left'}}>
                    <SOBlockClauseCard
                        {
                            ...card
                        }
                    />
                </div>
                <div style={{borderCollapse: 'collapse', backgroundColor: '#fafafa', overflow: 'hidden', height: `${height}px`}}>
                    {children}
                </div>
            </div>
        )
    }

}