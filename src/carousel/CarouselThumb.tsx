import * as React from 'react';
import "./CarouselThumb.scss";

export interface CarouselThumbProps {
    items: {src: string}[],
    width?: number;
    height?: number;
    onClick?: (any)=>void;
    cur?: number;

}

export default class CarouselThumb extends React.Component<CarouselThumbProps, any> {
    render() {
        const {items, onClick, cur} = this.props;
        return (
            <div className="carousel-thumb">
                <div className="carousel-thumb-inner">
                    {
                        items.map((item, index)=>{
                            return <div key={index} className={`carousel-thumb-item ${cur==index? 'cur' : ''}`} onClick={onClick && onClick.bind(this, index)}>
                                <img src={item.src} alt=""/>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}
