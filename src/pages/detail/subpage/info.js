import React,{ Component } from 'react';
import {getInfoData} from '../../../fetch/detail'
import DetailInfo from "../../../components/detailInfo"

export default class Info extends Component {
   constructor() {
      super();
      this.state = {
         info: false
      }
   }

   componentDidMount() {
      let id = this.props.id;
      getInfoData(id)
         .then(res => {
            return res.json();
         })
         .then(data => {
            this.setState({
               info: data
            })
         })
   }

   render() {
      return (
         <div>
            {
               this.state.info ? <DetailInfo data={this.state.info}/> : <div>数据正在加载....</div>
            }
         </div>
      )
   }
}