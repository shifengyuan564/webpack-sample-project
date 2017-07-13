//main.js


import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';


class Main extends React.Component {
    render (){
        return (<Greeter/>);
    }
}

const root = document.getElementById("root");
ReactDOM.render(<Main/>, root);