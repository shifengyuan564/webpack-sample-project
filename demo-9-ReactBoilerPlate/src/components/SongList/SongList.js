import React, {PropTypes} from 'react';
import styles from './SongList.css';

const eachSong = (songData) => {

    const albumImage = "../../../img/cover.jpg"; //props.album.images[0];

    let musicName = songData.match(/][^(]+\(/g)[0];
    musicName = musicName.substring(1, musicName.length - 1).trim();

    let artist = songData.match(/\[[^\]]+\]/g)[0];
    artist = artist.substring(1, artist.length - 1);

    return (
        <div className={styles.eachSong}>
            <img src={albumImage} className={styles.image} role="presentation"/>
            <span className={styles.songDescription}>Name: {musicName}</span>
            <span className={styles.songDescription}>Artist: {artist}</span>
        </div>
    );
};

const SongList = (props) => (
    <div className={styles.root}>
        {props.listOfSongs.map((songData, index) => {
                let musicName = songData.match(/][^(]+\(/g)[0];
                musicName = musicName.substring(1, musicName.length - 1).trim();

                return (
                    <div key={musicName} onClick={() => props.selectSong(index)}>
                        {eachSong(songData)}
                    </div>
                );
            }
        )}
    </div>
);

SongList.propTypes = {
    listOfSongs: PropTypes.array,
    selectSong: PropTypes.func
};

export default SongList;