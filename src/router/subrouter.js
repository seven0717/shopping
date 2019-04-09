import React,{ Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/404';


export default class SubRouter extends Component {
   render(){
      return (
         <Switch>
            {/*页面路由*/}
            <Route exact path='/' component={ Home }></Route>
            <Route component={ NotFound }></Route>
         </Switch>
      )
   }
}