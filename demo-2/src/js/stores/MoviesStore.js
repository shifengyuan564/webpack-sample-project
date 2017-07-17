import {EventEmitter} from 'events';

class MoviesStore extends EventEmitter {
    constructor() {
        super();
        this.movies = [
            {
                "title": "A new hope",
                "episode_id": 4,
                "opening_crawl": "what is opening_crawl, it is a period of civil war. \r\nRebel space...",
                "director": "George Lucas",
                "producer": "Gary Kurtz",
                "release_date": "1989"
            },
            {
                "title": "B old hope",
                "episode_id": 5,
                "opening_crawl": "what is opening_crawl",
                "director": "George Lucas",
                "producer": "Gary Kurtz",
                "release_date": "1989"
            },
        ];
    }

    getMovies() {
        return this.movies;
    }
}

const moviesStore =  new MoviesStore;
export default moviesStore;