// Greeter.js

import React from 'react';
import './Greeter.css';

class Greeter extends React.Component {

    constructor(){
        super();
        this.place = "Jinzhou";
    }

    getInfo(){
        return "Dalian";
    }

    render() {
        const name = "sfy";
        return (
            <h2>
                React is running !
                <span className="greet-text"> 你好 {name} {this.getInfo()} {this.place}！</span>
            </h2>
        );
    }
}

export default Greeter;