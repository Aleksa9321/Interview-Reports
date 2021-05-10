import React, { Component } from 'react';
import "./style.css"

class Company extends Component {
    render() {
        return (
            <div className="company">
                <h4 onClick={() => this.props.enterCompany(this.props.data)}>{this.props.data.name}</h4>
            </div>
        );
    }
}

export {Company};