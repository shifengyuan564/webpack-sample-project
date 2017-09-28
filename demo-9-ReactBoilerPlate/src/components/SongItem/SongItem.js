import React, {PropTypes} from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {

    const {songData} = props;
    let reg_artist = /\[[^\]]+\]/g;

    /* 截取[]之间的字符串*/
    let artist = "[Bonne Aparte] Ta[st]e My Snow (3401)".match(reg_artist)[1];
    artist = artist.substring(1, artist.length - 1);
    console.log(artist);

    /* 截取()之间的字符串*/
    let reg_num = /\([^\)]+\)/g;
    let num = "[Bonne Aparte] Ta[st]e My S(no)w (3401)".match(reg_num)[1];
    num = num.substring(1, num.length - 1);
    console.log(num);

    return (
        <div>
            SongItem
        </div>
    );
};

export default SongItem;