import React, {Component} from 'react';
import './style.less'
import SearchInput from '../searchInput'

export default class SearchHead extends Component {
   render() {
      return (
         <div id="search-header" className="clear-fix">
               <span className="back-icon left" onClick={this.clickHandle.bind(this)}>
                   <i className="icon-chevron-left"></i>
               </span>
            <div className="input-container">
               <i className="icon-search"></i>
               &nbsp;
               <SearchInput defaultValue={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
            </div>
         </div>
      )
   }

   clickHandle() {
      window.history.back();
   }

   enterHandle(value) {
      this.props.history.push('/search/all/' + encodeURIComponent(value))
   }
}