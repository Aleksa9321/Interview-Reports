import React, { Component } from 'react';
import "./style.css"
import {ReportSingle} from "../ReportSingle/index"

class ReportList extends Component {
    render() {
        return (
            <div className="report-list">
                {this.props.reportsData.map(el => <ReportSingle reportData={el} setReportData={this.props.setReportData} token={this.props.token}></ReportSingle>)}
            </div>
        );
    }
}

export {ReportList};