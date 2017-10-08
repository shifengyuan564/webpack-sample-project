/* music search */

import React, {Component} from 'react';
import styles from './app02.css';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';
import SongList from './SongList/SongList';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            song:'',
            tracks: [],
            position: 0,
            list: [0, 1, 2, 3, 4]
        };
    }

    fetchSongs = () => {
        searchSpotify(this.state.song)
            .then(({aRows}) => this.setState({tracks: aRows}));
    };

    render() {
        const {tracks, position, list} = this.state;

        return (
            <div className={styles.root}>
                <SearchBar updateText={(song) => this.setState({song})} fetchSongs={this.fetchSongs}/>
                {tracks.length > 0 && <SongItem songData={tracks[position]}/>} {/* && operator is a safe guard to right part */}
                {tracks.length > 0 && <SongList listOfSongs={tracks} selectSong={(position)=>this.setState({position})} />}

                {/* 测试map key
                <div className="listStuff">
                    {list.map(numb => <div key={numb}>{numb}</div>)}
                </div>
                <button onClick={() => this.setState({list: [1, 2, 3, 4, 5]})}>change</button>
                */}
            </div>
        );
    }
}