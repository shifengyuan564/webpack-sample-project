import React, {Component} from 'react';
import hljs from 'highlight.js';
import {rando, getRandomPoem} from './utils';
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
            rulesNum: 1
        };

        this.newFields = this.newFields.bind(this);
        this.rules = this.rules.bind(this);

        this.language = this.language.bind(this);
        this.registerLanguage = this.registerLanguage.bind(this);
    }

    // 箭头函数声明，不需要bind
    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value   // name as the key
        });
    };

    convertToMarkup = (text = "") => {
        return {
            __html: hljs.highlightAuto(text).value
        }
    };

    prepareStyles = () => {
        let {rulesNum} = this.state;
        let styles = [];
        for (let i = 0; i < rulesNum; i++) {
            styles.push(`
                .hljs-${this.state["name" + i]} {
                    ${this.state["style"+i]}
                }
            `)
        }
        let newStyles= "".concat(styles).replace(",","");
        console.log(newStyles);
        return newStyles;
    };

    language(newRules) {
        return () => ({
            contains: [...newRules]
        })
    }

    registerLanguage(state) {
        let {rulesNum} = state;
        let ruleObjects = [];

        for (let i = 0; i < rulesNum; i++) {

            let newRule = {
                className: state[`name${i}`],
                begin: state[`begin${i}`],
                end: state[`end${i}`]
            };

            let {className, begin, end} = newRule;

            if (className.length > 1 && begin.length > 1 && end.length > 1) {
                begin = new RegExp(begin);
                end = new RegExp(end);
                ruleObjects.push(newRule);
            }
        }

        hljs.registerLanguage("language", this.language(ruleObjects));
        hljs.configure({languages: ['language']});
    }

    componentWillUpdate(nextProps, nextState) {
        this.registerLanguage(nextState)
    }


    rules() {
        let {rulesNum} = this.state;
        let array = [];
        let fields = ['name', 'begin', 'end'];

        for (let i = 0; i < rulesNum; i++) {
            array.push(
                <Row key={i}>
                    <Column>
                        {fields.map((field, idx) => {
                            return (
                                <Column key={idx}>
                                    <RuleLabel>{field}</RuleLabel>
                                    <RuleInput
                                        name={`${field}${i}`}
                                        value={this.state[`${field}${i}`]}
                                        onChange={this.handleChange}
                                    />
                                </Column>
                            );
                        })}
                    </Column>
                    <StyleInput
                        value={this.state[`style${i}`]}
                        onChange={this.handleChange}
                        name={`style${i}`}
                    />
                </Row>
            );
        }

        //console.log(array);
        return array;
    }

    // 这种函数声明法，需要bind,将newFileds()绑到App上。否则this为null
    // 如果不在constructor里bind，则会报:Uncaught TypeError: Cannot read property 'setState' of null.
    newFields() {
        this.setState((prevState) => {

            let {rulesNum} = prevState;
            let fields = ['name', 'begin', 'end', 'style'];
            let inputValues = {};

            // arrow function, spread Operator
            fields.forEach((field) => {
                inputValues = {
                    ...inputValues,
                    [`${field}${rulesNum}`]: ''
                }
            });

            rulesNum++;

            //console.log({rules, ...inputValues});// Object {rulesNum: 2, name1: "", begin1: "", end1: "", style1: ""}
            return {rulesNum, ...inputValues};
        })
    };

    render() {
        let {editor} = this.state;
        let {handleChange, newFields, rules, convertToMarkup, prepareStyles} = this;

        return (
            //  {...props} : pass all parent's props to this child component
            <Container>
                <Column>
                    {rules()}
                    <Button onClick={newFields}>New Rule</Button>
                </Column>
                <Column>
                    <Button>Random Text</Button>
                    <Document>
                        <Editor name={"editor"} value={editor} onChange={handleChange}/>
                        <Markup
                            customStyles={prepareStyles()}
                            dangerouslySetInnerHTML={convertToMarkup(editor)}
                        />
                    </Document>
                </Column>
            </Container>
        );
    }
}

export default App;
