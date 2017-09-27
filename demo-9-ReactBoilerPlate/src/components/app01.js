/*
    02 Introduction To React
*/

import React, {Component} from 'react';
import Button from './button';

/* 老写法
const App = () => (
    <div>
        <Button btName="Click" clicked={() => console.log("clicked")}/>
        <Button btName={"search"}/>
    </div>
);
*/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            value: '',
            text:''
        };

        this.counterPlus = this.counterPlus.bind(this);
        this.textEntered = this.textEntered.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    counterPlus() {
        this.setState({counter: ++this.state.counter});
    }

    textEntered(e) {
        this.setState({value: e.target.value});
    }

    changeText(){
        this.setState({text: this.state.value});
    }

    render() {
        return (
            <div>
                {this.state.text}
                <input type="text" value={this.state.value} onChange={this.textEntered}/>
                <Button btName={'Click Me'} clicked={this.changeText}/>
            </div>

        );
    };
}

export default App;
