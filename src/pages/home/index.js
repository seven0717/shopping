import React,{ Component } from 'react';
import Header from '../../components/header'
import Banner from '../../components/banner'
import HomeAd from './homeAd'
export default class Home extends Component {
   render(){
      return (
         <div>
            <Header cityName="北京"/>
            <Banner/>
            <HomeAd/>
         </div>
      )
   }
}