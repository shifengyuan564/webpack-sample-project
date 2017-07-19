import React from 'react';
import {Link, Route} from 'react-router-dom';    // Routing Libraries

import MoviesArea from './movies/MoviesArea';
import CharactersArea from './characters/CharactersArea';

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
                <Link to="/moviesArea">Movies</Link> | <Link to="/charactersArea">Characters</Link>
                <h1>{this.state.welcome}</h1>
                <div>
                    <switch>
                        <Route path="/moviesArea" component={MoviesArea}/>
                        <Route path="/charactersArea/:character" component={CharactersArea}/>
                    </switch>
                </div>
            </div>
        );
    }
}