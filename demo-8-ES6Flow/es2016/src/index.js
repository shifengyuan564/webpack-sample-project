import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    //constAndLet,
    //arrowFunctions
    //destructuring
    //objAssemblyComputedProps
    spreadOperator
} from './examples';


//constAndLet();
//arrowFunctions();
//destructuring();
//objAssemblyComputedProps();
spreadOperator();

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
