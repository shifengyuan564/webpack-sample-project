import React from 'react';
import Button from './button';

/* 老写法，新写法是class App extends React.Component {}*/

function printToConsole(){
    console.log("Clicked");
}

const App = () => (
    <div>
        <Button btName="Click" clicked={() => console.log("clicked")}/>
        <Button btName={"search"}/>
    </div>
);

export default App;
export const appDescription = "app says hi";
