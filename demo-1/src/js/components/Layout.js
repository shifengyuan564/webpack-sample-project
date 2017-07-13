import React from 'react';

import Movies from './movies/Movies';
import Characters from './characters/Characters';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            welcome: "Welcome to Star Wars Trivia !",
            shoutout: "No Shoutouts!"
        }
    }

    createNewShoutOut(shoutout) {
        this.setState({shoutout});
    }

    render() {
        const movieQuestion = "Have yhou seen all of these Movies?";
        const characterQuestion = "What do you know about each of these Characters?";

        return (
            <div>
                <h1>{this.state.welcome}</h1>

                <h4>Newest Shoutout: {this.state.shoutout}!!</h4>

                <Movies shoutout={this.state.shoutout}
                        question={movieQuestion}
                        createNewShoutOut={this.createNewShoutOut.bind(this)}/>

                <Characters question={characterQuestion}/>
            </div>
        );
    }
}