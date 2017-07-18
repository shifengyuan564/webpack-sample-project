import React from 'react';

import Movie from '../../components/movie/Movie';
import MoviesStore from '../../stores/MoviesStore';
import Shoutouts from '../shoutouts/Shoutouts';

export default class Movies extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: MoviesStore.getMovies()
        };
    }

    render() {
        const {movies} = this.state;
        const movieList = movies.map((movie) => {
            return <Movie key={movie.episode_id} {...movie}/>
        });

        return (
            <div>
                <h2>Movie List</h2>
                <ul>{movieList}</ul>
                <Shoutouts/>
            </div>
        );
    }
}

