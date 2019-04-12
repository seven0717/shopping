import React,{ Component } from 'react'
import './style.less'

export default class CityList extends Component {
   render(){
      return (
         <div className="current-city">
            <h2>{ this.props.cityname }</h2>
         </div>
      )
   }

}