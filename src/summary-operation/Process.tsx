import * as React from 'react';

export interface ProcessProps {
    done: number;
    total: number;
    preColor?: string;
    bgColor?: string;
    width?: number;
    height?: number;
}

export default class Process extends React.PureComponent<ProcessProps, any> {
    render() {
        const {done, total,preColor,bgColor, width, height} = this.props;
        const percent = total ? parseFloat((done/total * 100).toFixed(2)) + '%' : 0;
        return (
            <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                <span style={{display: 'inline-block',
                    width: width?width+'px':'108px',
                    height: height?height+'px': '6px',
                    borderRadius: "6px",
                    verticalAlign: 'middle',
                    fontSize: 0,
                    backgroundColor: bgColor||"#cfcfcf"}}>
                    <span style={{display: 'inline-block',
                        width: percent,
                        height: height?height+'px': '6px',
                        borderRadius: "6px",
                        verticalAlign: 'middle',
                        backgroundColor: preColor||'#48d4e8'}} /></span>
                <span style={{paddingLeft: '9px'}}>{percent}</span>
            </div>
        );
    }
}
