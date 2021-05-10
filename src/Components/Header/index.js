import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    render() {
        return (
            <div className={this.props.mode === "no-button" ? "header no-button" : "header"}>
                <h1>Interview Reports</h1>
                <div className="header-buttons">
                    <button onClick={this.props.loadUserList}>Candidates</button>
                    <button id="login" onClick={this.props.loadLogin}>Login</button>
                </div>     
            </div>
        );
    }
}

export {Header};