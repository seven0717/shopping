import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/reset.css"
import "./static/css/font.css"
import { Provider } from 'react-redux'
import store from './reduxs/store'
import AppRouter from './router/approuter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={ store() }><AppRouter /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
