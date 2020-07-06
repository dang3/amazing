import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/forms/LoginForm";
import home from "./home";

function App() {
    return (
        <div className="Content">
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/" component={home} />
            </Switch>
        </div>
    );
}

export default App;
