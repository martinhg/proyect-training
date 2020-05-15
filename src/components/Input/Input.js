import React from "react";

const Input = (props) => {
    return (
        <input
            type = { props.value.type }
            name = { props.value.name }
            placeholder = { props.value.placeholder }
            // onChange = { onChange }
        />
    );
}

export default Input;