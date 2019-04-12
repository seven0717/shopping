import React,{ Component } from 'react'
import './style.less';

export default class CityHead extends Component {
   render() {
      return (
         <div id="common-header">
            <span className="back-icon" onClick={this.clickBack.bind(this)}>
            <i className="icon-chevron-left"></i>
          </span>
            <h1>{this.props.title}</h1>
         </div>
      )
   }
   clickBack(){
      window.history.back()
   }
}