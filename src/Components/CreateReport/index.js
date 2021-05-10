import React, { Component } from 'react';
import "./style.css"
import {SelectCandidate} from "../SelectCandidate/index"
import {SelectCompany} from "../SelectCompany/index"
import {FillReportDetails} from "../FillReportDetails/index"

class CreateReport extends Component {

    state = {
        selectCandidate: true,
        selectCompany: false,
        fillReportDetails: false,
        userName: "",
        userId: "",
        company: "",
        companyId: "",
        date: "",
        phase: "",
        status: "",
        notes: ""
    }

    goToSelectCompany = () => {
        this.setState({
            selectCandidate: false,
            selectCompany: true
        })
    }

    goToFillReportDetails = () => {
        this.setState({
            selectCandidate: false,
            selectCompany: false,
            fillReportDetails: true
        })
    }

    enterUser = (data) => {
        this.setState({
            userName: data.name,
            userId: data.id
        })
    }

    enterCompany = (data) => {
        this.setState({
            company: data.name,
            companyId: data.id
        })
    }

    saveField = (field, event) => {
        this.setState({
            [field]: event.target.value
        })
    }

    postData = () => {
        fetch("http://localhost:3333/api/reports",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.props.token
            },
            body: JSON.stringify({
                "candidateId": this.state.userId,
                "candidateName": this.state.userName,
                "companyId": this.state.companyId,
                "companyName": this.state.company,
                "interviewDate": this.state.date,
                "phase": this.state.phase,
                "status": this.state.status,
                "note": this.state.notes
            })
        })
    }

    render() {
        return (
            <div className="create-report">
                <div className="create-report-steps">
                    <p className="create-report-steps-p">1 Select Candidate</p>
                    <p className="create-report-steps-p">2 Select Company</p>
                    <p className="create-report-steps-p">3 Fill Report Details</p>
                </div>
                <div className="create-report-component">
                    {this.state.selectCandidate === true ? <SelectCandidate goToSelectCompany={this.goToSelectCompany} enterUser={this.enterUser}></SelectCandidate> : ""}
                    {this.state.selectCompany === true ? <SelectCompany goToFillReportDetails={this.goToFillReportDetails} enterCompany={this.enterCompany}></SelectCompany> : ""}
                    {this.state.fillReportDetails === true ? <FillReportDetails saveField={this.saveField} postData={this.postData}></FillReportDetails> : ""}
                </div>
            </div>
        );
    }
}

export {CreateReport};