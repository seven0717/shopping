import React, {Component} from 'react'
import "./style.less"

export default class HomeAd extends Component {
   render() {
      return (
         <div id="home-ad">
            <h2>超值特惠</h2>
            {
               this.props.data.map((item, index) => {
                  return (
                     <div key={index} className="ad-item left">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                           <img src={item.img} alt={item.title}/>
                        </a>
                     </div>
                  )
               })
            }
         </div>
      )
   }
}