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

        };

        this.counterPlus = this.counterPlus.bind(this);
        this.textEntered = this.textEntered.bind(this);
    }

    counterPlus() {
        this.setState({counter: ++this.state.counter});
    }

    textEntered(e){

    }

    render() {
        return (
            <div>
                {this.state.counter}
                <Button btName={'Add 1'} clicked={this.counterPlus}/>
                <input type="text" value="Search a Song" onChange={this.textEntered} />
            </div>

        );
    };
}

export default App;
