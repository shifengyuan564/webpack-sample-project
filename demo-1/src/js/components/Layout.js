import React from 'react';

import Movies from './movies/Movies';
import Characters from './characters/Characters';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            welcome: "Welcome to Star Wars Trivia !",
            layoutInfo: "No Shoutouts!"
        };

        /*This binding is necessary to make `this` work in the callback*/
        this.changeTypeText = this.changeTypeText.bind(this)
    }

    changeTypeText(inputVal) {
        this.setState({
            layoutInfo : inputVal
        });
    }

    render() {
        const movieQuestion = "Have yhou seen all of these Movies?";
        const characterQuestion = "What do you know about each of these Characters?";

        return (
            <div>
                <h1>{this.state.welcome}</h1>

                <h4>Layout Shoutout: {this.state.layoutInfo}!!</h4>

                <Movies shoutout={this.state.layoutInfo}
                        question={movieQuestion}
                        createShoutOut={this.changeTypeText}/>


                <Characters question={characterQuestion}/>
            </div>
        );
    }
}