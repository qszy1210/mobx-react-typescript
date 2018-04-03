import * as React from "react"
import {observer} from "mobx-react"

@observer
export default class AddButton extends React.Component<any,{}>{
    render(){
        return <button onClick={this.addBy.bind(this)}>add item</button>
    }
    addBy(){
        this.props.store.addBy()
    }
    testfun(){
        console.log()
    }
}
