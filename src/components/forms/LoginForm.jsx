import React, { Component } from "react";
import NavBar from "../navBar";
import Input from "./formComponents/input";

class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
        errors: {},
    };

    validate = () => {
        const errors = {};
    };

    handleSubmit = (eventObj) => {
        eventObj.preventDefault();

        // check for errors
        const errors = this.validate();
        this.setState({ errors });
        if (errors) return;

        // Call the server
        console.log("submitted");
    };

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    };

    render() {
        const { account } = this.state;
        return (
            <div>
                <NavBar />
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        id="username"
                        name="username"
                        label="Username"
                        value={account.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        id="password"
                        name="password"
                        label="Password"
                        value={account.password}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
