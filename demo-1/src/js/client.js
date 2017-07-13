import React from 'react';
import ReactDom from 'react-dom';

class Layout extends React.Component {
    render() {
        return (
            <h2>React is Running !</h2>
        );
    }
}

const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);