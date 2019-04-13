import React from 'react'
import './style.less'
import Star from '../star'
export default class DetailInfo extends React.Component {
   render(){
      let data = this.props.data;
      console.log(data);
      return (
         <div id="detail-info-container">
            <div className="info-container clear-fix">
               <div className="info-img-container left">
                  <img src={data.img}/>
               </div>
               <div className="info-content">
                  <h1>{data.title}</h1>
                  <div className="star-container">
                     <Star star={data.star} />
                     <span className="price">￥{data.price}</span>
                  </div>
                  <p className="sub-title">{data.subTitle}</p>
               </div>
            </div>
            {/* 以下的方案是在react中加载原声HTML结构的方案 */}
            <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
         </div>
      )
   }
}