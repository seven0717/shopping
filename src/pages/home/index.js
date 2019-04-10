import React,{ Component } from 'react';
import Header from '../../components/header'
import Banner from '../../components/banner'
import HomeAd from './subhome'
import HomeList from './subhome/list'
export default class Home extends Component {
   render(){
      return (
         <div>
            <Header cityName="北京"/>
            <Banner/>
            <div style={{height: '15px'}}>{/* 分割线 */}</div>
            <HomeAd/>
            <div style={{height: '15px'}}>{/* 分割线 */}</div>
            <HomeList city="北京"/>
         </div>
      )
   }
}