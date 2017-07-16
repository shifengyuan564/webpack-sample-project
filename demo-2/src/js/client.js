import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';    // Routing Libraries

import Layout from './components/Layout';


const app = document.getElementById('app');

ReactDom.render(
    <BrowserRouter history={history}>
        <Route path="/" component={Layout} />
    </BrowserRouter>
    , app);