import React from 'react';
import {Link, Route} from 'react-router-dom';    // Routing Libraries

import MoviesArea from './movies/MoviesArea';
import CharactersArea from './characters/CharactersArea';
import ShoutoutsArea from './shoutouts/ShoutoutsArea';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            welcome: "A Star Wars Trivia App"
        }
    }

    render() {

        let customStyle = {
            marginLeft: 30,
            //paddign:10,
            //backgroundColor: "#ffde00",
            // color: "#333",
            //display:"inline-block",
            //fontFamily:"monospace",
            //fontSize:"18",
            //textAlign:"center"
        };

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <p className="navbar-brand">React! &nbsp;</p>
                            <Link to="/moviesArea" className="btn btn-default navbar-btn">Movies</Link>
                            <Link to="/charactersArea" className="btn btn-default navbar-btn">Characters</Link>
                        </div>
                        <p className="navbar-brand"> &nbsp; {this.state.welcome}</p>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-sm-4" style={customStyle}>
                        <div className="well">
                            <switch>
                                <Route exact path="/moviesArea" component={MoviesArea}/>
                                <Route exact path="/charactersArea" component={CharactersArea}/>
                                 <Route exact path="/charactersArea/:cha_name" component={CharactersArea}/>
                            </switch>
                        </div>
                    </div>
                    <div className="col-sm-4" style={customStyle}>
                        <div className="well">
                            <ShoutoutsArea/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}