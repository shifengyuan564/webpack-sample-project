import React from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom';    // Routing Libraries

import Movies from './movies/Movies';
import Characters from './characters/Characters';

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
                <Link to="movies-list">Movies</Link> | <Link to="characters-list">Characters</Link>
                <h1>{this.state.welcome}</h1>
                <div>
                    <switch>
                        <Route path="/movies-list" component={Movies}/>
                        <Route path="/characters-list/:character" component={Characters}/>
                    </switch>
                </div>

            </div>
        );
    }
}