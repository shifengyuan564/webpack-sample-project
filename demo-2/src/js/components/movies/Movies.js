import React from 'react';

export default class Movies extends React.Component {

    movieInput(e) {
        const inputVal = e.target.value;
        this.props.createShoutOut(inputVal);
    }

    render() {
        return (
            <div>
                <h2>Movie List</h2>
                <h4>{this.props.question}</h4>

                <input onChange={this.movieInput.bind(this)}/>
                <h4>Movie Shoutout : {this.props.shoutout} !!!</h4>
            </div>
        );
    }
}

