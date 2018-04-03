//经营情况的进度unit组件,包含进度条和一些说明
import * as React from 'react';
import {default as Process, ProcessProps} from "./Process";

export interface ProcessUnitProps extends ProcessProps{
    label: string;
    count: number;
    amount: number;
    uom: string;
    className?: string;
}

export default class ProcessUnit extends React.Component<ProcessUnitProps, any> {
    render() {
        const {label, count, amount ,uom, className, ...processProps} = this.props;
        return (
            <div className={className}>
                <div>
                    <span style={{color: "#878787", fontSize: "14px"}}>
                        <span>{label}</span>
                        <span>({count}笔)</span>
                    </span>
                    <span style={{color: "#111111", fontSize: "20px"}}>
                        <span>{amount}</span>
                        <span>{uom}</span>
                    </span>
                </div>
                <Process {...processProps} />
            </div>
        );
    }
}
