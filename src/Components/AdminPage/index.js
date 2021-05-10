import React, { Component } from 'react';
import "./style.css"
import {HeaderAdmin} from "../HeaderAdmin/index"
import {Search} from "../Search/index"
import {ReportList} from "../ReportList/index"
import {ReportDetails} from "../ReportDetails/index"
import {CreateReport} from "../CreateReport/index"

class AdminPage extends Component {

    state = {
        reports: true,
        createReport: false,
        reportsData: [],
        filteredReports: "",
        reportData: ""
    }

    componentDidMount = () => {
        fetch("http://localhost:3333/api/reports")
        .then(response => response.json())
        .then(results => this.setState({
            reportsData: results
        }))
    }

    search = (event) => {
        this.setState({
            filteredReports: this.state.reportsData.filter(el => el.companyName.toLowerCase().includes(event.target.value.toLowerCase()) || el.candidateName.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    showReports = () => {
        this.setState({
            reports: true,
            createReport: false,
            filteredReports: ""
        })
    }

    showCreateReport = () => {
        this.setState({
            reports: false,
            createReport: true,
            filteredReports: ""
        })
    }

    setReportData = (el) => {
        this.setState({
            reportData: [el]
        })
    }

    removeReportData = () => {
        this.setState({
            reportData: ""
        })
    }

    render() {
        return (
            <div className="admin-page">
                <HeaderAdmin showReports={this.showReports} showCreateReport={this.showCreateReport} reports={this.state.reports} createReport={this.state.createReport}></HeaderAdmin>
                {this.state.reports === true ? <Search search={this.search}></Search> : ""}
                {this.state.reports === true ? <ReportList reportsData={this.state.filteredReports === "" ? this.state.reportsData : this.state.filteredReports} setReportData={this.setReportData} token={this.props.token}></ReportList> : <CreateReport token={this.props.token}></CreateReport>}
                {this.state.reportData !== "" ? <ReportDetails reportData={this.state.reportData} removeReportDetails={this.removeReportData}></ReportDetails> : ""}
            </div>
        );
    }
}

export {AdminPage};