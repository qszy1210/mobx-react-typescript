import * as React from 'react';

interface ShowOrHideProps {
    title : string;
    show ?: boolean;
}

export class ShowOrHide extends React.Component<ShowOrHideProps, any> {

    constructor(props: ShowOrHideProps, context: any) {
        super(props, context);
        this.state = {
            show : this.props.show !== undefined ? this.props.show : false
        };
    }

    render(): JSX.Element|any {
        let style: any = {
            main : {
                width: '100%',
                minHeight : '20px',
                height : '',
                backgroundColor : '#ffffff',
                border : '1px solid #d7d7d7',
                borderRadius : '3px',
                marginBottom : '20px',
                overflow : 'hidden',
            },
            title : {
                width: '100%',
                height : '30px',
                lineHeight : '30px',
                backgroundColor : '#eeeeee',
                padding : '0 20px',
            },
            content : {
                padding : '20px',
            }
        };

        if(!this.state.show){
            style.main.height = '30px';
        }

        return (
            <div style={style.main}>
                <div style={style.title} onClick={this.show}>
                    <span style={{float : "left"}}>{this.props.title}</span>
                    <span style={{float : "right"}}>{this.state.show ? "收起" : "展开"}</span>
                </div>
                <div style={style.content}>{this.props.children}</div>
            </div>
        )
    }

    show(){
        this.setState({
            show : !this.state.show
        })
    }
}