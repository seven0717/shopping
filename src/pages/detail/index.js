import React,{ Component } from 'react';
import Header from '../../components/cityhead'
import Info from './subpage/info'
import Comment from './subpage/comment'
export default class Detail extends Component {
   render(){
      let id = this.props.match.params.id;
      return (
         <div>
            <Header title="商品详情"/>
            <Info id={id}/>
            <Comment id={id}/>
         </div>
      )
   }
}