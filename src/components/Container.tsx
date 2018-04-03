import * as React from "react"
import {observer} from "mobx-react"
import ItemC from "./ItemComponent"
import StageC from "./StageComponent"
import AddButton from "./AddButton"

interface ContainerProps{
    store:any
}

@observer
export default class Container extends React.Component<ContainerProps,{}>{
    render(){
        return <div>
            <StageC model={this.props.store.selectedItem}/>
            <ul>
                {
                    this.props.store.items.map((v,i)=>(
                       <ItemC key={i} model={v} store={this.props.store}/>
                    ))
                }
            </ul>
            <AddButton store={this.props.store}></AddButton>
        </div>
    }

}
