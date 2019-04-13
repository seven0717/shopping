import React,{ Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/404';
import Mine from '../pages/mine';
import Order from '../pages/order';
import City from '../pages/city';
import Search from '../pages/search';
import Detail from '../pages/detail';


export default class SubRouter extends Component {
   render(){
      return (
         <Switch>
            {/*页面路由*/}
            <Route exact path='/' component={ Home }></Route>
            <Route path='/order' component={ Order }></Route>
            <Route path='/mine' component={ Mine }></Route>
            <Route path='/city' component={ City }></Route>
            <Route path='/search/:type/:keyword?' component={ Search }></Route>
            <Route path='/detail/:id' component={ Detail }></Route>
            <Route component={ NotFound }></Route>
         </Switch>
      )
   }
}