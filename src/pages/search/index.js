import React, { Component } from 'react';
import SearchHead from '../../components/searchhead'
import SubPage from './subpage/list'
export default class Search extends Component {

   render(){
      const params = this.props.match.params;
      return (
         <div>
            <SearchHead history={this.props.history}/>
            <SubPage category={params.type} keyword={params.keyword}/>
         </div>
      )
   }
}