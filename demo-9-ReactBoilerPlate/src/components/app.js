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

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            text:'',
            value: ''
        };
        this.counterPlus = this.counterPlus.bind(this);
        this.textEntered = this.textEntered.bind(this);

    }

    counterPlus() {
        this.setState({counter: ++this.state.counter});
    }

    textEntered(e) {
        this.setState({value: e.target.value});
    }

    changeText(){
        this.setState({text:this.state.value});
    }

    /* 这种箭头写法不用bind
    textEntered = (e) => {
        this.setState({value: e.target.value});
    };*/

    render() {
        return (
            <div>
                {this.state.text}
                <input type="text" value={this.state.value} onChange={this.textEntered}/>
                <Button btName={'Click Me'} clicked={this.changeText}/>
            </div>
        );
    }
}

