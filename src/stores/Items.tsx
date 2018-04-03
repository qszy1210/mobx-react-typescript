import {observable,reaction} from "mobx"
import Item from "../models/Item"

interface iItemStore{
    items: Item[];
    //selectedItem: Item;

    addItem(src:string,id);
    setSelectedItem(item:Item);
    toggle(itemModel);
}

export default class ItemStore implements iItemStore{
    @observable items=[]
    @observable selectedItem

    constructor(objs){
        if(typeof objs !== "object") {
            return;
        }
        objs.forEach(obj=>
            obj.src ? this.addItem(obj.src,obj.id): ""
        )
    }

    addItem(title:string,id) {

        let item = Item.getInstance(title,id)
        this.items.push(item)
    }
    setSelectedItem(item:Item) {
        this.selectedItem = item;
    }

    toggle(itemModel){
        let id = itemModel.id;
        // itemModel.
        this.items.map((item)=>item.id === id ? this.setSelectedItem(item): item.isChecked = false)
    }

    addBy(){

        this.addItem("4.jpeg",4);
    }

    toJs(){
        return this.items.map((item)=>item.toJs());
    }

    // subscribeChange(){
    //     reaction(
    //         ()=>this.toJs(),
    //         data=>
    //     )
    // }

    static pushArg<T>(arg:T):Array<T>{
        var a = [];
        a.push(arg)
        return a;
    }


}
