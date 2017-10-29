import React, {Component} from 'react';
import './App.css';
import Items from "../containers/items";

export default class App extends Component{

    render(){
        return (
            <div className="App-mainbody">
                <Items/>
            </div>
        )
    }
}