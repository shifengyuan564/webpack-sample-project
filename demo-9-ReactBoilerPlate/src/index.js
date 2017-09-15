import React from 'react';
import ReactDOM from 'react-dom';

import App, {appDescription} from './components/app';

/* Destructuring */
const randomObject = {Vaibhav:'10', Alex:'12'};
const {Vaibhav} = randomObject;


/*<App/> is a instance of App*/
console.log(appDescription);
ReactDOM.render(<App/>, document.querySelector('.container'));
