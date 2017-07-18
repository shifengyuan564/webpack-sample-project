import React from 'react';

import Shoutout from '../shoutout/Shoutout';
import * as ShoutoutActions from '../../actions/ShoutoutActions';
import ShoutoutsStore from '../../stores/ShoutoutsStore';

export default class Shoutouts extends React.Component {

    constructor() {
        super();
        this.state = {
            newShoutout: '',
            newName: '',
            shoutoutsList: ShoutoutsStore.getShoutouts()
        };

        this.handleNewShoutout= this.handleNewShoutout.bind(this);
        this.handleNewName = this.handleNewName.bind(this);
        this.getShoutoutList = this.getShoutoutList.bind(this);
    }

    componentWillMount() {
        ShoutoutsStore.on("newShoutout", this.getShoutoutList);
    }
    componentWillUnmount() {
        ShoutoutsStore.removeListener("newShoutout", this.getShoutoutList);
    }


    handleNewShoutout(e) {
        this.setState({newShoutout: e.target.value});
    }
    handleNewName(e) {
        this.setState({newName: e.target.value});
    }

    getShoutoutList() {
        this.setState({shoutoutsList: ShoutoutsStore.getShoutouts()});
    }

    createShoutout(){
        ShoutoutActions.createShoutout(
            this.state.newShoutout, this.state.newName
        );
    }

    render() {
        const soList = this.state.shoutoutsList;
        const ShoutoutComponents = soList.map((so) => <Shoutout key={so.id} {...so}/>);

        return (
            <div>
                <h2>Shoutouts List</h2>
                <input type="text" value={this.state.newShoutout} onChange={this.handleNewShoutout}/>
                <input type="text" value={this.state.newName} onChange={this.handleNewName}/>
                <button onClick={this.createShoutout.bind(this)}>Create Shoutout</button>
                <ul>{ShoutoutComponents}</ul>
            </div>
        );
    }
}