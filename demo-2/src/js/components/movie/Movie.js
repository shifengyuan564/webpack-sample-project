import React from 'react';

export default class Movie extends React.Component {

    render() {
        const {title, episode_id, opening_crawl, director, producer, release_date} = this.props;

        return (
            <li>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>{title}</h2>
                    </div>
                    <div className="panel-body">
                        <p>{opening_crawl}</p>
                    </div>
                    <div className="panel-footer">
                        <div>Director: {director}</div>
                        <div>Producer: {producer}</div>
                        <div>Release Date: {release_date}</div>
                    </div>
                </div>
            </li>
        );
    }
}