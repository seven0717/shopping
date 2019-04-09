import React, {Component} from 'react';
import {getAdData} from '../../../fetch/homefetch'

export default class HomeAd extends Component {
   componentDidMount() {
      var result = getAdData()
      result.then(res => {
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