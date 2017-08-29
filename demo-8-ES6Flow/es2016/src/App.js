import React, {Component} from 'react';
import {
    Markup, Editor, Container, Column, Row,
    RuleInput, RuleLabel, StyleInput, Button, Document
} from './styled'

class App extends Component {

    constructor() {
        super();
        this.state = {
            editor: ""
        };
    }


    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value   // name as the key
        });
    };

    render() {
        let {value} = this.state;
        let {handleChange} = this;

        return (
            //  {...props} : pass all parent's props to this child component
            <Container >
                <Column>
                    <Button>
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
