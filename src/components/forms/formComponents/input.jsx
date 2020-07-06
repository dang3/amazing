import React from "react";

const Input = ({ handleChange, value, placeholder, type, id }) => {
    return (
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                className="form-control"
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
