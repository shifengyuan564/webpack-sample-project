import React from 'react';
import {classify} from "./utils"

export default class Btn extends React.Component {


    render() {
        const DynamicTag = this.props.href ? "a" : "button"; // if href exists, it's a link otherwise a buton
        const className = classify("btn", this.props.className) + (this.props.disabled ? " disabled" : "");

        return <DynamicTag {...this.props} className={className}>Discover things.</DynamicTag>;
    }
}