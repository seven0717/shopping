import React, {Component} from 'react'
import "./style.less"
import SearchInput from '../searchInput'

export default class Header extends Component {
   render() {
      return (
         <div id="home-header" className="clear-fix">

            {/*城市*/}
            <div className="home-header-left left">
               <a href="#">
                  <span>{this.props.cityName}</span>
                  &nbsp;
                  <i className="icon-angle-down"></i>
               </a>
            </div>

            {/*右侧*/}
            <div className="home-header-right right">
               <i className="icon-user"></i>
            </div>

            {/*中间*/}
            <div className="home-header-middle">
               <div className="search-container">
                  <i className="icon-search"></i>
                  &nbsp;
                  <SearchInput value=""/>
               </div>
            </div>
         </div>
      )
   }
}