import { createStore } from 'redux'
import routerReducers from '../reducers'

export default function(inits) {
   const store =createStore(routerReducers,inits,window.devToolsExtension ? window.devToolsExtension() : f => f);
   return store
}