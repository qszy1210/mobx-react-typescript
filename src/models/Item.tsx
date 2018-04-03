import {observable} from "mobx"

export default class Item {
    @observable isChecked = false
    src
    id

    constructor(id, src, checked){
        this.id = id
        this.src = src
        this.isChecked = checked
    }

    toggle(){
        this.isChecked = !this.isChecked;
    }

    static getInstance(src,id){
        // let id = new Date().getTime()
        return new Item(id,src, false)
    }

    toJs(){
        return {
            isChecked: this.isChecked
        }
    }
}
