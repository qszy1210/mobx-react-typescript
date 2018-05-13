import * as React from 'react';
import Reg from './regexp/Reg';
import ExportTest from './export/ExportTest';
import exportInstance from './export/ExportInstance';
import * as _ from "lodash";
import Carousel from "./carousel/Carousel";
import GenId from './genid/GenId';

import "react-image-gallery/styles/scss/image-gallery.scss";
import {ShowOrHide} from "./components/ShowOrHide";
import Triangle from './triangle/Triangle';
export interface TestComponentProps {
}

export default class TestComponent extends React.Component<TestComponentProps, any> {
  render() {
    exportInstance.init();
    return (
        <div>
            <ShowOrHide show={true} title={"测试三角"}>
            <Triangle />
            </ShowOrHide>
            <ShowOrHide show={false} title={"测试lambda"}>
                
            </ShowOrHide>
            <ShowOrHide show={false} title={"测试atom"}>

            </ShowOrHide>

            <div style={{display: "none"}}>
                <GenId/>
            </div>
            <ExportTest/>
            <div style={{display: "none"}}>{exportInstance.name}</div>
            <Reg/>

            <div style={{display: "none"}}>{_.toInteger('a')}</div>
            <div style={{display: "none"}}>---- {_.toInteger(_.toNumber('a'))}</div>

            <div style={{display: "none"}}>
                <Carousel {
                              ...{
                                  width: 600,
                                  height: 400,
                                  items: [{
                                      src: "https://img.alicdn.com/simba/img/TB1ktGPdxSYBuNjSsphSuvGvVXa.jpg",
                                  },
                                      {
                                          src: "https://img.alicdn.com/tfs/TB1GUjge1OSBuNjy0FdXXbDnVXa-520-280.jpg_q90_.webp",
                                      },
                                      {
                                          src: "https://img.alicdn.com/simba/img/TB1pdWEfhSYBuNjSspjSut73VXa.jpg"
                                      },],
                                  speed: 500,
                                  delay: 3000,
                                  // autoPlay: true,
                                  showCaret: true,
                                  caretProcessing: true,
                                  // showThumb: true,
                                  isShowArrows: true,
                                  isPauseWhenHover: true,
                                  changeCallback: (index) => console.log(index)
                              }
                          }/>
            </div>

        </div>
    );
  }

    triggerHanlder() {
        let timer = null;
        const discountCallBack = async function () {
            timer && clearTimeout(timer);

            timer = setTimeout(async function () {
                console.log(`haha`);
                    timer && clearTimeout(timer);
            }, 100);
        };


    }


}

