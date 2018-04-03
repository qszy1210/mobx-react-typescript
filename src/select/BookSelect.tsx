import * as React from 'react';
import Select from 'chanjet-nova-ui/dist/input/Select';
import StyleProvider from 'chanjet-nova-ui/dist/theme/StyleProvider';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import {autobind} from "core-decorators";
import './BookSelect.scss';
export interface ChanjetSelectProps {
}

@observer
@autobind
export default class BookSelect extends React.Component<ChanjetSelectProps, any> {
  @observable
  current: any;


  componentDidMount() {
    this.current = {name: '企业7', value: 'v7', code: 'code7',label: 'cur1rent'};
  }
  render() {
    const options = [
      {name: '企业1', value: 'v1', code: 'code1', label: "label1"},
      {name: '企业2', value: 'v2', code: 'code2',label: "label2"},
      {name: '企业3', value: 'v3', code: 'code3',label: "label3"},
      {name: '企业4', value: 'v4', code: 'code4',label: "label4"},
      {name: '企业5', value: 'v5', code: 'code5',label: "label5"},
      {name: '企业6', value: 'v6', code: 'code6',label: "label6"},
      {name: '企业7', value: 'v7', code: 'code7',label: "label7"},
    ];
    return (
        <StyleProvider>
          <div className="book-select">
          <Select
        borderLineStyle="underline"
        options={options}
        value={this.current}
        openOnFocus={true}
        focus={true}
        valueKey={'code'}
        labelKey={'code'}
        searchable={true}
        closeOnSelect={true}
        menuRenderer={(obj)=>{
          const {options, closeMenu} = obj;
          return options.map(option=>{
              return <SelectItem {...{label: option.name, onClick: this.onClick,desc: [1,2,3].map(i=>option.code).join(','), data:option, closeMenu: closeMenu, width: 245}}></SelectItem>
          })
        }}
        // onChange={this.change}
        />
          </div>
        
        </StyleProvider>
        
    );
  }
  // change(data) {
  //   this.current = data;
  // }

  onClick(data) {
    this.current = data;
  }
}

export const SelectItem = (props: any) => {
  const {label, desc, width, data, onClick, closeMenu} = props; 
  return <div className="book-select-item" style={{width}} onClick={()=>{onClick && onClick(data); closeMenu && closeMenu();}}>
    <div className="item">
    <span className="company-name">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum non commodi nesciunt, consequatur nisi quibusdam expedita voluptas quidem consectetur, velit deleniti impedit pariatur, vero incidunt accusamus. Voluptatem, rerum deleniti.</span>
    <span className="tip">hel</span>
    </div>
    <div className="desc" title={desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum non commodi nesciunt, consequatur nisi quibusdam expedita voluptas quidem consectetur, velit deleniti impedit pariatur, vero incidunt accusamus. Voluptatem, rerum deleniti.</div>
  </div>
}

export const Items = ()=>{
  return <div className="book-select-item-wrapper">
    {
      [1,2,3].map(item=>{
        return <SelectItem width={225}/>
      })
    }
  </div>
}
