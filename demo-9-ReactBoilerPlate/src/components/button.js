import React, {PropTypes} from 'react';

const Button = (props) => {

    return (
        <button onClick={props.clicked}>{props.btName}</button>
    )
};

/* 限制button的props类型*/
Button.propTypes = {
    btName: PropTypes.string,
    clicked: PropTypes.func
};

export default Button;