import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/reset.css"
import "./static/css/font.css"
import AppRouter from './router/approuter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
