import React from 'react';

export default class Movies extends React.Component {

    createShoutOut(e) {
        const shoutOut = e.target.value;
        this.props.createNewShoutOut(shoutOut);
    }

    render() {
        return (
            <div>
                <h2>Movie List</h2>
                <h4>{this.props.question}</h4>

                <input onChange={this.createShoutOut.bind(this)}/>
                <h4>Current Shoutout : {this.props.shoutout} !!!</h4>
            </div>
        );
    }
}

