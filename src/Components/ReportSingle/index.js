import React, { Component } from 'react';
import "./style.css"

class ReportSingle extends Component {

    removeReport = () => {
        fetch("http://localhost:3333/api/reports/" + this.props.reportData.id.toString(), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.props.token
            }
        })
    }

    render() {
        return (
            <div className="report-single">
                <div className="report-element">
                    <h4>{this.props.reportData.companyName}</h4>
                    <p>Company Name</p>
                </div>
                <div className="report-element">
                    <h4>{this.props.reportData.candidateName}</h4>
                    <p>Candidate Name</p>
                </div>
                <div className="report-element">
                    <h4>{this.props.reportData.interviewDate}</h4>
                    <p>Interview Date</p>
                </div>
                <div className="report-element">
                    <h4>{this.props.reportData.status.toUpperCase()}</h4>
                    <p>Status</p>
                </div>
                <div className="report-options">
                    <button onClick={() => this.props.setReportData(this.props.reportData)}>Info</button>
                    <button onClick={() => this.removeReport(this.props.reportData.id.toString())}>X</button>
                </div>
            </div>
        );
    }
}

export {ReportSingle};