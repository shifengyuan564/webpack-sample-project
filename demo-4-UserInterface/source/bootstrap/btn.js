import React from 'react';
import {classify} from "./utils";
import "./btn.scss";

export default class Btn extends React.Component {


    render() {
        const DynamicTag = this.props.href ? "a" : "button"; // if href exists, it's a link otherwise a buton
        const className = classify("btn", this.props.className) + (this.props.disabled ? " disabled" : "");

        return <DynamicTag {...this.props} className={className}>
            {this.props.label || this.props.children}
        </DynamicTag>;
    }
}