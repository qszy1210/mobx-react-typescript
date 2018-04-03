import * as React from "react"
import {observer} from "mobx-react"

interface ItemComponentsProps{
    model
    store
}

@observer
export default class ItemC extends React.Component<ItemComponentsProps,{}>{
    render(){
        return <li onClick={this.toggleChecked.bind(this)}>
            <input type="checkbox" checked={this.props.model.isChecked}/>
            <img src={"./images/" + this.props.model.src} alt={this.props.model.src} className="img"/>
        </li>
    }
    toggleChecked(){
        console.log("toggle checked")
        this.props.model.toggle();
        this.props.store.toggle(this.props.model);
    }
}
