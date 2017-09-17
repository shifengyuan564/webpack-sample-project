import React, {PropTypes}  from 'react';

const Button = (props) => {
    console.log("props - ", props);
    return (
        <button>{props.btName}</button>
    )

};

/* 限制button的props类型*/
Button.propTypes={
    btName: PropTypes.string,
};

export default Button;