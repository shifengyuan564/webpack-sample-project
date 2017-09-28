import React, {Component} from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialMessage: 'greeting',
            song: '',
            tracks: []
        };
    }

    fetchSongs = () => {
        searchSpotify(this.state.song)
            .then(({aRows}) => this.setState({tracks: aRows}));
    };

    render() {
        const {initialMessage, song, tracks} = this.state;

        return (
            <div>
                <SearchBar updateText={(song) => this.setState({song})} fetchSongs={this.fetchSongs}/>
                {tracks.length > 0 && <SongItem songData={tracks[0]}/>} {/* && operator is a safe guard to right part */}
            </div>
        );
    }
}