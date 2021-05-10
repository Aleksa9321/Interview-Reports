import React, { Component } from 'react';
import "./style.css"

class Candidate extends Component {
    render() {
        return (
            <div className={this.props.mode === "select-candidate" ? "candidate-small" : "candidate"}>
                <img src="https://tinyurl.com/y2nvk6f3" alt=""></img>
                <div className="candidate-data">
                    <h4 onClick={() => this.props.enterUser(this.props.data)}>{this.props.data.name}</h4>
                    <p>{this.props.data.email}</p>
                </div>
            </div>
        );
    }
}

export {Candidate};