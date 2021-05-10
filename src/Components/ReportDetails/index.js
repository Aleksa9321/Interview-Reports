import React, { Component } from 'react';
import "./style.css"

class ReportDetails extends Component {
    render() {
        return (
            <div className="report-details">
                <div className="report-details-data">
                    <div className="report-details-data-heading">
                        <h1>{this.props.reportData[0].candidateName}</h1>
                        <button onClick={this.props.removeReportDetails}>X</button>
                    </div>
                    <div className="report-details-data-body">
                        <div className="report-details-data-1">
                            <p>Company</p>
                            <h4>{this.props.reportData[0].companyName}</h4>
                            <p>Interview Date</p>
                            <h4>{this.props.reportData[0].interviewDate.slice(0, 15)}</h4>
                            <p>Phase</p>
                            <h4>{this.props.reportData[0].phase.toUpperCase()}</h4>
                            <p>Status</p>
                            <h4>{this.props.reportData[0].status.toUpperCase()}</h4>
                        </div>
                        <div className="report-details-data-2">
                            <p>Notes</p>
                            <p>{this.props.reportData[0].note}</p>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export {ReportDetails};