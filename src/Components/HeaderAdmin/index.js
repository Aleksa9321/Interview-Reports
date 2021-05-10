import React, { Component } from 'react';
import "./style.css"

class HeaderAdmin extends Component {
    render() {
        return (
            <div className="header-admin">
                <h1>Reports Administration</h1>
                <div className="header-admin-buttons">
                    <button onClick={this.props.showReports} className={this.props.reports === true ? "selected" : ""}>Reports</button>
                    <button onClick={this.props.showCreateReport} className={this.props.createReport === true ? "selected" : ""}>Create Report</button>
                </div>
            </div>
        );
    }
}

export {HeaderAdmin};