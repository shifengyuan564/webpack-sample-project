import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';    // Routing Libraries

import Layout from './components/Layout.js'

const app = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <Route path="/" component={Layout}></Route>
    </BrowserRouter>
    , app);