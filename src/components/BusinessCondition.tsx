import * as React from 'react';
import "./bc.scss";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {couponConfig} from "./couponConfig";

export interface BusinessConditionProps {
}


function zajax(that) {
    var xhr = new XMLHttpRequest(),
        method = "POST",
        url = "/api",
        data = {
            "name": "12312311223",
            "fromDate": 1516118400000,
            "isDisplayCorpInfo": true,
            // "companyName": "好生意测试版公司名称",
            "couponType": "CASH_COUPON",
            "discountPct": "10折",
            "nominalAmount": "<sub>¥</sub>999",
            "lowLimitAmount": "不限制使用金额",
            "action": "立即领取",
            "orgLogoUrl": "",
            "template": 5,
            "theme": 5,
            "couponTemplate": couponConfig
        };

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
            that.data = xhr.responseText;
        }
    };
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(
        JSON.stringify(data)
    );
}

@observer
export default class BusinessCondition extends React.Component<BusinessConditionProps, any> {

  @observable
  data: any;

  render() {
    const that = this;

    // console.log(axios);

    const ratio = 2;
      zajax(that);


    return (
      // <div dangerouslySetInnerHTML={{__html: that.data}}></div>
      <div id="container" style={{ height: "500px", verticalAlign: "middle", lineHeight: "500px" }}> test <img src={that.data} alt="图片" /></div>
    )
  }
}
