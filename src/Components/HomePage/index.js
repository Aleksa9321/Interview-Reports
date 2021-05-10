import React, { Component } from 'react';
import "./style.css"
import {Header} from "../Header/index"
import {Search} from "../Search/index"
import {CandidateList} from "../CandidateList/index"
import {CandidateDetails} from "../CandidateDetails/index"
import {ReportDetails} from "../ReportDetails/index"
import {Login} from "../Login/index"

class HomePage extends Component {

    state = {
        userDetails: false,
        userData: [],
        reportDetails: false,
        reportData: [],
        login: false
    }

    enterUser = (data) => {
        this.setState({
            userData: data,
            userDetails: true
        })
    }

    loadUserList = () => {
        this.setState({
            userData: [],
            userDetails: false
        })

        this.props.userListReturn()
    }

    loadReportDetails = (id, reportData) => {
        let selectedReportData = reportData.filter(el => el.id === id)
        this.setState({
            reportDetails: true,
            reportData: selectedReportData
        })
    }

    removeReportDetails = () => {
        this.setState({
            reportDetails: false,
            reportData: []
        })
    }

    loadLogin = () => {
        this.setState({
            login: true
        })
    }

    removeLogin = () => {
        this.setState({
            login: false
        })
    }

    render() {
        return (
            <div className="home-page">
                <Header mode={this.state.userDetails === false ? "no-button" : "button"} loadUserList={this.loadUserList} loadLogin={this.loadLogin}></Header>
                {this.state.userDetails === false ? <Search search={this.props.search}></Search> : ""}
                {this.state.userDetails === false ? <CandidateList data={this.props.data} enterUser={this.enterUser}></CandidateList> : ""}
                {this.state.userDetails === true ? <CandidateDetails data={this.state.userData} loadReportDetails={this.loadReportDetails}></CandidateDetails> : ""}
                {this.state.reportDetails === true ? <ReportDetails reportData={this.state.reportData} removeReportDetails={this.removeReportDetails}></ReportDetails> : ""}
                {this.state.login === true ? <Login removeLogin={this.removeLogin} getLoginData={this.props.getLoginData} accessToken={this.props.accessToken}></Login> : ""}
            </div>
        );
    }
}

export {HomePage};