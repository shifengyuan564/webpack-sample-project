import React from 'react';
import ReactDOM from 'react-dom';

//import App from './components/app01';
import App from './components/app02';

/* Destructuring */
const randomObject = {Vaibhav: '10', Alex: '12'};
const {Vaibhav} = randomObject;

/*<App/> is an instance of App*/
ReactDOM.render(<App/>, document.querySelector('.container'));
