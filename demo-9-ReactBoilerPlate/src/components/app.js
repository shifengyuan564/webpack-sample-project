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

    render(){
        return(
            <div>
                Hi
            </div>
        );
    }
}

export default App;
