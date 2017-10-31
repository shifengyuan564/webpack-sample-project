import React, {Component} from 'react';
import './App.css';
import Items from "../containers/items";
import ShoppingCart from "../containers/shoppingCart";

export default class App extends Component{

    render(){
        return (
            <div className="App-mainbody">
                <Items/>
                <ShoppingCart/>
            </div>
        )
    }
}