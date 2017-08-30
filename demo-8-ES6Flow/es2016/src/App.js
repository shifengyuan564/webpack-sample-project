import React, {Component} from 'react';
import {
    Markup, Editor, Container, Column, Row,
    RuleInput, RuleLabel, StyleInput, Button, Document
} from './styled'

class App extends Component {

    constructor() {
        super();
        this.state = {
            editor: "",
            name0: "",
            begin0: "",
            end0: "",
            style0: "",
            rules: 1
        };

        this.newFields = this.newFields.bind(this);
    }

    // 这种函数声明法，不需要bind
    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value   // name as the key
        });
    };

    // 这种函数声明法，需要bind,将newFileds()绑到App上。否则this为null
    // 如果不在constructor里bind，则会报:Uncaught TypeError: Cannot read property 'setState' of null.
    newFields() {
        this.setState((prevState) => {

            let {rules} = prevState;
            let fields = ['name', 'begin', 'end', 'style'];
            let inputValues = {};

            fields.forEach((field) => {
                inputValues = {
                    ...inputValues,
                    [`${field}${rules}`]: ''
                }
            });

            rules++;

            console.log({rules, ...inputValues});
            return {rules, ...inputValues};
        })
    };

    render() {
        let {value} = this.state;
        let {handleChange, newFields} = this;

        return (
            //  {...props} : pass all parent's props to this child component
            <Container>
                <Column>
                    <Button onClick={newFields}>
                        New Rule
                    </Button>
                </Column>
                <Column>
                    <Button>
                        Random Text
                    </Button>
                    <Document>
                        <Editor name={"Editor"} value={value} onChange={handleChange}/>
                        <Markup/>
                    </Document>
                </Column>
            </Container>
        );
    }
}

export default App;
