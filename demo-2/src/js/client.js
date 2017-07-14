import React from 'react';
import ReactDom from 'react-dom';
import {Router, route, IndexRoute, hashHistory} from 'react-router';    // Routing Libraries

import Layout from './components/Layout.js'


const app = document.getElementById('app');
ReactDom.render(
    <Layout/>, app
);