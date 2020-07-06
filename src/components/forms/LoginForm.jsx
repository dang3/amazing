import React, { Component } from "react";
import Input from "./formComponents/Input";

class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
    };

    handleChange = ({ currentTarget }) => {
        const account = { ...this.state.account };
        account[currentTarget.id] = currentTarget.value;
        this.setState({ account });
    };

    render() {
        const { account } = this.state;
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        handleChange={this.handleChange}
                        value={account.username}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder=""
                        handleChange={this.handleChange}
                        value={account.password}
                    />
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
