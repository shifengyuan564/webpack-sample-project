import React, {PropTypes} from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {

    const {songData} = props;

    /* 截取[]之间的字符串*/
    let artist = songData.match(/\[[^\]]+\]/g)[0];
    artist = artist.substring(1, artist.length - 1);

    /* 截取()之间的字符串*/
    let num = songData.match(/\([^\)]+\)/g)[0];
    num = num.substring(1, num.length - 1);

    /* 截取] (之间的字符串*/
    let musicName = songData.match(/][^(]+\(/g)[0];
    musicName = musicName.substring(1, musicName.length-1).trim();

    return (
        <div className={styles.root}>
            <div className={styles.album}>
                <img role="presentation" src="../../../img/cover.jpg" />
                <span className={styles.albumName}>The Love Songs</span>
            </div>
            <div className={styles.songAndDescription}>
                <audio controls  src="../../../music/miraie.aac"/>
                <span className={styles.songDescription}>Name: {musicName}</span>
                <span className={styles.songDescription}>Duration(ms): 155600</span>
            </div>
        </div>
    );
};

SongItem.propTypes = {
    songData: PropTypes.string,

};

export default SongItem;