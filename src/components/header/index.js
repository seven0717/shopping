import React, {Component} from 'react'
import "./style.less"
import SearchInput from '../searchInput'
import { Link } from 'react-router-dom';
export default class Header extends Component {
   render() {
      return (
         <div id="home-header" className="clear-fix">

            {/*城市*/}
            <div className="home-header-left left">
               <Link to="/city">
                  <span>{this.props.cityName}</span>
                  &nbsp;
                  <i className="icon-angle-down"></i>
               </Link>
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
                  <SearchInput defaultValue="" enterHandle={this.enterHandle.bind(this)}/>
               </div>
            </div>
         </div>
      )
   }

   enterHandle(value){
      console.log(value);
      // 路由跳转
      this.props.history.push('/search/all/' + encodeURIComponent(value))
   }
}