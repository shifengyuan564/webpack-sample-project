import React from 'react';
import Btn from './bootstrap/btn';
import Jumbotron from "./bootstrap/jumbotron";

export default class App extends React.Component {

    render() {
        return <Jumbotron className="-fluid text-xl-center" flu={true}>
            <h1>Building React.js User Interfaces</h1>
            <p>with Bootstrap and Sass.</p>
            <p>
                <Btn className="-outline-secondary" href="#" target="_blank" disabled/>
                <Btn className="-outline-danger -sm" disabled/>
                <Btn className="-outline-primary -lg -block" disabled/>
            </p>
        </Jumbotron>;
    }
}