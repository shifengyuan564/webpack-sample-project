import React from "react";

export default class Character extends React.Component {

    render() {
        const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = this.props;

        return (
            <li>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>{name}</h2>
                    </div>
                    <div className="panel-body">
                        <div>Height: {height}</div>
                        <div>Mass: {mass}</div>
                        <div>Hair Color:{hair_color}</div>
                        <div>Eye Color:{eye_color}</div>
                        <div>Gender: {gender}</div>
                        <div>Birth Year: {birth_year}</div>
                    </div>
                </div>
            </li>
        );
    }
}