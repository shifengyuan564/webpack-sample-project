import {EventEmitter} from 'events';

class CharactersStore extends EventEmitter {
    constructor() {
        super();
        this.characters = [
            {
                "name": "Dooku",
                "height": "193",
                "mass": "80",
                "hair_color": "white",
                "skin_color": "fair",
                "eye_color": "brown",
                "birth_year": "102BBY",
                "gender": "male"
            },
            {
                "name": "Jango Fett",
                "height": "183",
                "mass": "78",
                "hair_color": "black",
                "skin_color": "tan",
                "eye_color": "brown",
                "birth_year": "66BBY",
                "gender": "male"
            }
        ];
    }

    getCharacters() {
        return this.characters;
    }
}

const charactersStore = new CharactersStore;
export default charactersStore;