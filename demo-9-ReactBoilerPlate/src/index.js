import React from 'react';
import ReactDOM from 'react-dom';

import App, {appDescription} from './components/app';

/* Destructuring */
const randomObject = {Vaibhav:'10', Alex:'12'};
const {Vaibhav} = randomObject;


/*<App/> is an instance of App*/
ReactDOM.render(<App/>, document.querySelector('.container'));
