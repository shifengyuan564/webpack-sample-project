require('./app.scss');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

import React from 'react';
import ReactDom from 'react-dom';
import HarViewer from './components/HarViewer.jsx';

ReactDom.render(
    <HarViewer/>,
    document.getElementById("root")
);