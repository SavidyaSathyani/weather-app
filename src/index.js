import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import route from './routes';
import './resources/css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router history={browserHistory} routes={route} />, 
    document.getElementById('app')
);