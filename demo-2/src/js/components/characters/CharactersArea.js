import React from 'react';
import Character from '../character/Character';
import CharactersStore from '../../stores/CharactersStore';

export default class CharactersArea extends React.Component {

    constructor() {
        super();
        this.state = {
            characters: CharactersStore.getCharacters()
        }
    }

    render() {
        const {characters} = this.state;
        const charactersDomList = characters.map((cha) => <Character key={cha.name} {...cha} />);

        return (
            <div>
                <h2>Star War Characters List</h2>
                <h4>parameter: {this.props.match.params.cha_name}</h4>
                <ul>{charactersDomList}</ul>
            </div>
        );
    }
}