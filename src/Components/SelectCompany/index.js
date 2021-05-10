import React, { Component } from 'react';
import "./style.css"
import {Company} from "../Company/index"

class SelectCompany extends Component {

    state = {
        companies: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3333/api/companies")
        .then(response => response.json())
        .then(results => this.setState({
            companies: results
        }))

    }

    render() {
        return (
            <div className="select-company">
                {this.state.companies.map(el => <Company data={el} enterCompany={this.props.enterCompany}></Company>)}
                <button>Back</button>
                <button onClick={this.props.goToFillReportDetails}>Next</button>
            </div>
        );
    }
}

export {SelectCompany};