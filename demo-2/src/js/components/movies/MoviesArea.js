import React from 'react';

import Movie from '../../components/movie/Movie';
import MoviesStore from '../../stores/MoviesStore';

export default class MoviesArea extends React.Component {

    constructor() {
        super();
        this.state = {
            moviesList: MoviesStore.getMovies()
        };
    }

    render() {
        const {moviesList} = this.state;
        const movieList = moviesList.map((movie) => <Movie key={movie.episode_id} {...movie}/>);

        return (
            <div>
                <h2>Movie List</h2>
                <ul>{movieList}</ul>
            </div>
        );
    }
}

