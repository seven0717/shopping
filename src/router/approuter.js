import React,{ Component } from 'react';
import { Route,BrowserRouter } from 'react-router-dom'
import App from '../pages/App'
import Subrouter from './subrouter'

export default class AppRouter extends Component {
   render(){
      return (
         <BrowserRouter>
            <App>
               <Route path="/" component={ Subrouter }></Route>
            </App>
         </BrowserRouter>
      )
   }
}