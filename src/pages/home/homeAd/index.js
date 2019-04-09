import React, {Component} from 'react';
import {getAdData} from '../../../fetch/homefetch'

export default class HomeAd extends Component {
   componentDidMount() {
      getAdData()
         .then(res => {
            return res.json();
         })
         .then(data => {
            console.log(data);
         })
   }

   render() {
      return (
         <div>
            homead
         </div>
      )
   }
}