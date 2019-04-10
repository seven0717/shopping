import React, {Component} from 'react';
import {getAdData} from '../../../fetch/homefetch'
import Homead from '../../../components/homeAd'

export default class Ad extends Component {
   constructor(){
      super();
      this.state = {
         data:[]
      }
   }

   componentDidMount() {
      getAdData()
         .then(res => {
            return res.json();
         })
         .then(data => {
            this.setState({
               data:data
            })
         })
   }

   render() {
      return (
         <div>
            {
               this.state.data.length > 0 ? <Homead data={this.state.data}/> : <div>加载中...</div>
            }

         </div>
      )
   }
}