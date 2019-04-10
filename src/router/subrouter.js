import React,{ Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/404';
import Mine from '../pages/mine';
import Order from '../pages/order';


export default class SubRouter extends Component {
   render(){
      return (
         <Switch>
            {/*页面路由*/}
            <Route exact path='/' component={ Home }></Route>
            <Route path='/order' component={ Order }></Route>
            <Route path='/mine' component={ Mine }></Route>
            <Route component={ NotFound }></Route>
         </Switch>
      )
   }
}