import React from 'react';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            welcome: "Welcome to Star Wars Trivia !"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.welcome}</h1>
            </div>
        );
    }
}