import React from 'react';

export default class Characters extends React.Component {
    render() {
        return (
            <div>
                <h2>Character List</h2>
                <h4>{this.props.question}</h4>
            </div>
        );
    }
}