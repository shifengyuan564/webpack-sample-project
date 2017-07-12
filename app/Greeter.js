// Greeter.js

import React from 'react';
import './Greeter.css';

class Greeter extends React.Component {

    render() {
        return (
            <h2>
                React is running !
                <span className="greet-text"> 你好 ！</span>
            </h2>
        );
    }
}

export default Greeter;