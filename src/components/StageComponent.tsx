import * as React from "react"
import {observer} from "mobx-react"

export interface StageProps{
    model
}

@observer
export default class StageC extends React.Component<StageProps,any>{
    render(){
        if (this.props.model) {
            return <div className="stage">
                <img src={"images/" + this.props.model.src} alt={this.props.model.src} className="img"/>
            </div>
        } else {
            return <div className="stage">no selected</div>
        }
    }
}
