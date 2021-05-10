import React, { Component } from 'react';
import "./style.css"

class FillReportDetails extends Component {
    render() {
        return (
            <div className="fill-report-details">
                <input type="date" onChange={(event) => this.props.saveField("date", event)} required></input>
                <select onChange={(event) => this.props.saveField("phase", event)} required>
                    <option></option>
                    <option>Hr</option>
                    <option>Technical</option>
                    <option>Final</option>
                </select>
                <select onChange={(event) => this.props.saveField("status", event)} required>
                    <option></option>
                    <option>PASSED</option>
                    <option>DECLINED</option>
                </select>
                <textarea onChange={(event) => this.props.saveField("notes", event)} required></textarea>
                <button>Back</button>
                <button onClick={() => this.props.postData()}>Submit</button>
            </div>
        );
    }
}

export {FillReportDetails};