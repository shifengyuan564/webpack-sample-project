import React from 'react';
import {classify} from "./utils";
import Container from './container';
import "./jumbotron.scss";

export default class Jumbotron extends React.Component {
    render() {
        const newProps = Object.assign({}, this.props);
        newProps.className = classify("jumbotron", newProps.className);

        const {flu} = newProps;
        delete newProps.flu;    // 不删除则会报异常：Warning: Unknown prop `flu` on <div> tag

        //console.log(flu);     会输出true

        const body = newProps.className.includes("jumbotron-fluid") ?
            <Container style={{color: 'Brown'}} fluid={flu} className="rat">
                {this.props.children}
            </Container> : this.props.children;


        return <div {...newProps}>
            {body}
        </div>
    }
}