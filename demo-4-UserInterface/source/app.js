import React from 'react';
import Btn from './bootstrap/btn';
import Jumbotron from "./bootstrap/jumbotron";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import './appsource.scss';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clickNum: 0,
            labels: []
        };
        this.btnClick = this.btnClick.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    btnClick(e) {
        //console.log(this);  如果不进行bind，则this就不会指向App
        let newLabels = this.state.labels.concat([this.state.clickNum]);

        this.setState({
            clickNum: ++this.state.clickNum,
            labels: newLabels
        });
    }

    onReset(e){
        this.setState({
            clickNum: 0,
            labels: []
        });
    }

    render() {

        let buttons = this.state.labels.map((value, i) => {
            return <Btn key={i}>{value}</Btn>;
        });

        return <ReactCSSTransitionGroup transitionName="app"
                                        transitionAppear={true} transitionAppearTimeout={500}
                                        transitionEnter={true} transitionEnterTimeout={500}
                                        transitionLeave={true} transitionLeaveTimeout={500}>

            <Jumbotron className="-fluid text-xl-center custom" flu={true}>
                <h1>Building React.js User Interfaces</h1>
                <p>with Bootstrap and Sass.</p>
                <p>
                    <Btn className="-outline-secondary" href="#" label={this.state.clickNum} onClick={this.btnClick}>
                        Click Here</Btn>
                    <Btn className="-outline-danger -sm">Discover Stuff</Btn>
                    <Btn className="-outline-primary -lg -block" label="Reset" onClick={this.onReset}/>
                </p>
                <ReactCSSTransitionGroup transitionName="app"
                                         transitionEnterTimeout={5000}
                                         transitionLeaveTimeout={500}>
                    {buttons}
                </ReactCSSTransitionGroup>
            </Jumbotron>
        </ReactCSSTransitionGroup>;
    }
}