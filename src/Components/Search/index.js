import React, { Component } from 'react';
import "./style.css"

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Search..." onChange={this.props.search}></input>
            </div>
        );
    }
}

export {Search};