import React from "react";

const Input = ({ name: inputName, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={inputName}>{label}</label>
            <input
                id={inputName}
                name={inputName}
                type="text"
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
};

export default Input;
