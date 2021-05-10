import React, { Component } from 'react';
import {Redirect} from "react-router-dom"
import "./style.css"

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    login = () => {
        fetch("http://localhost:3333/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
        .then(results => results.json())
        .then(response => this.props.getLoginData(response.accessToken))
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className="login">
                {this.props.accessToken && <Redirect from="/" to="/admin"></Redirect>}
                <div className="login-form">
                    <div className="login-heading">
                        <h1>Login</h1>
                        <button onClick={this.props.removeLogin}>X</button>
                    </div>
                    <form>
                        <input type="email" name="email" placeholder="Username" onChange={this.setEmail}></input>
                        <input type="password" name="password" placeholder="Password" onChange={this.setPassword}></input> 
                    </form>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}

export {Login};