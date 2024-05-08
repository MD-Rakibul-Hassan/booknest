import React from "react";

const Input = ({ styles,type, value, setValue,  }) => {
    return <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${styles}`}
    />;
};

export default Input;
