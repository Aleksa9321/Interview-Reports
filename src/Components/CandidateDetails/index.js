import React, { Component } from 'react';
import "./style.css"

class CandidateDetails extends Component {

    state = {
        reports: "",
        shownReport: ""
    }

    componentDidMount = () => {
        fetch("http://localhost:3333/api/reports")
        .then(response => response.json())
        .then(results => results.map(el => el.candidateId === this.props.data.id ? this.setState({
            reports: [...this.state.reports, el]
        }) : ""))
    }

    render() {
        return (
            <div className="candidate-details">
                <img src="https://tinyurl.com/y2nvk6f3" alt=""></img>
                <div className="user-details-data">
                    <div className="user-details-data-el">
                        <p>Name:</p>
                        <h4>{this.props.data.name}</h4>
                    </div>
                    <div className="user-details-data-el">
                        <p>Date of birth:</p>
                        <h4>{this.props.data.birthday.slice(4, 15)}</h4>
                    </div>
                    <div className="user-details-data-el">
                        <p>Email:</p>
                        <h4>{this.props.data.email}</h4>
                    </div>
                    <div className="user-details-data-el">
                        <p>Education:</p>
                        <h4>{this.props.data.education}</h4>
                    </div>
                </div>
                {this.state.reports !== "" ? 
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Interview Date</th>
                        <th colspan="2">Status</th>
                    </tr>
                    {this.state.reports.map(el => 
                    <tr>
                        <td>{el.companyName}</td>
                        <td>{el.interviewDate.slice(0, 15)}</td>
                        <td>{el.status.toUpperCase()}</td>
                        <td><button onClick={() => this.props.loadReportDetails(el.id, this.state.reports)}>Info</button></td>
                    </tr>)}
                </table> :
                <table className="no-reports">
                    <tr>
                        <td>There are no reports for this candidate.</td>
                    </tr>
                </table>}
            </div>
        );
    }
}

export {CandidateDetails};