import React,{ Component } from 'react'
import './style.less'

export default class ListItem extends Component {

   render() {
      const data = this.props.data
      return (
         <div className="list-item clear-fix">
            <div className="item-img-container left">
               <img src={data.img} alt={data.title}/>
            </div>
            <div className="item-content">
               <div className="item-title-container clear-fix">
                  <h3 className="left">{data.title}</h3>
                  <span className="right">{data.distance}</span>
               </div>
               <p className="item-sub-title">
                  {data.subTitle}
               </p>
               <div className="item-price-container clear-fix">
                  <span className="price left">￥{data.price}</span>
                  <span className="mumber right">已售{data.mumber}</span>
               </div>
            </div>
         </div>
      )
   }
}
