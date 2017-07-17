import React from 'react';

export default class Movie extends React.Component {

    render(){
        const {title, episode_id, opening_crawl, director, producer, release_date} = this.props;

        return (
            <li>
                <div><h2>{title}</h2></div>
                <div><p>{opening_crawl}</p></div>
                <div>Director: {director}</div>
                <div>Producer: {producer}</div>
                <div>Release Date: {release_date}</div>
            </li>
        );
    }
}